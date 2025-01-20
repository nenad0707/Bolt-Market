# Connect to Azure account
Connect-AzAccount

# Set the subscription context
$context = Get-AzSubscription -SubscriptionName "Azure subscription 1"
Set-AzContext -Subscription $context.Id

# Define variables for resources
$resourceGroupName = "boltmarket-app-rg"    # Name of the resource group
$resourceGroupLocation = "eastus"          # Location of the resource group
$githubOrganizationName = 'nenad0707'      # GitHub organization or username
$githubRepositoryName = 'Bolt-Market'      # GitHub repository name
$applicationDisplayName = "boltmarket-app" # Azure application name

# Create a resource group
Write-Host "Creating resource group $resourceGroupName..."
$resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $resourceGroupLocation

# Create a new Azure AD application
Write-Host "Creating Azure AD application..."
$applicationRegistration = New-AzADApplication -DisplayName $applicationDisplayName

# Add federated credentials for GitHub Actions
Write-Host "Adding federated credentials for GitHub Actions..."
New-AzADAppFederatedCredential `
  -Name "$applicationDisplayName-main-branch" `
  -ApplicationObjectId $applicationRegistration.Id `
  -Issuer 'https://token.actions.githubusercontent.com' `
  -Audience 'api://AzureADTokenExchange' `
  -Subject "repo:$($githubOrganizationName)/$($githubRepositoryName):ref:refs/heads/main"

# Create Azure AD Service Principal
Write-Host "Creating Service Principal..."
New-AzADServicePrincipal -AppId $applicationRegistration.AppId

# Assign the Contributor role to the application at the resource group level
Write-Host "Assigning Contributor role to the resource group..."
New-AzRoleAssignment `
  -ApplicationId $applicationRegistration.AppId `
  -RoleDefinitionName Contributor `
  -Scope $resourceGroup.ResourceId

# Output Azure secrets for GitHub Secrets
Write-Host "Azure credentials for GitHub Secrets:"
Write-Host "AZURE_CLIENT_ID: $($applicationRegistration.AppId)"
Write-Host "AZURE_TENANT_ID: $($context.Tenant.Id)"
Write-Host "AZURE_SUBSCRIPTION_ID: $($context.Subscription.Id)"

# Done
Write-Host "Azure resources successfully created for $applicationDisplayName!"
