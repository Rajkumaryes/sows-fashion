# Azure Deployment Guide for Sow's Fashion

This guide covers deploying your React + Vite application to Azure Portal using Azure Static Web Apps.

## Prerequisites

1. **Azure Account**: Sign up at [portal.azure.com](https://portal.azure.com) if you don't have one
2. **GitHub Account**: Your code should be in a GitHub repository
3. **Node.js**: Ensure Node.js is installed locally (for building)

## Option 1: Azure Static Web Apps (Recommended)

Azure Static Web Apps is perfect for React/Vite applications with built-in CI/CD, custom domains, and free SSL certificates.

### Method A: Deploy via Azure Portal (GUI)

#### Step 1: Prepare Your Code
1. Push your code to GitHub repository
2. Ensure your `package.json` has the build script: `"build": "vite build"`

#### Step 2: Create Static Web App in Azure Portal
1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"** or **"+ Create"**
3. Search for **"Static Web App"** and select it
4. Click **"Create"**

#### Step 3: Configure Static Web App
Fill in the following details:

**Basics Tab:**
- **Subscription**: Select your Azure subscription
- **Resource Group**: Create new or use existing
- **Name**: `sows-fashion` (or your preferred name)
- **Plan type**: Free (or Standard for production)
- **Region**: Choose closest to your users (e.g., East US, West Europe)
- **Source**: GitHub
- **Sign in with GitHub**: Click and authorize Azure

**Deployment Details:**
- **Organization**: Select your GitHub username/organization
- **Repository**: Select `sows-fashion` (or your repo name)
- **Branch**: `main` or `master`
- **Build Presets**: **Custom**
- **Build location**: Leave empty (we'll configure via workflow file)

#### Step 4: Review and Create
1. Review all settings
2. Click **"Review + create"**
3. Click **"Create"**

#### Step 5: Configure Build Workflow
Azure will automatically create a GitHub Actions workflow file. However, you may need to customize it:

The workflow file will be created at: `.github/workflows/azure-static-web-apps-<name>.yml`

Ensure it has the correct build configuration for Vite:
- **App location**: `/`
- **Output location**: `dist`

### Method B: Deploy via Azure CLI (Command Line)

#### Step 1: Install Azure CLI
```bash
# Windows (PowerShell)
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi
Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'

# Or use winget
winget install -e --id Microsoft.AzureCLI
```

#### Step 2: Login to Azure
```bash
az login
```

#### Step 3: Create Static Web App
```bash
# Set variables
RESOURCE_GROUP="sows-fashion-rg"
STATIC_WEB_APP_NAME="sows-fashion"
LOCATION="eastus"
GITHUB_TOKEN="your-github-token"
GITHUB_REPO="your-username/sows-fashion"
BRANCH="main"

# Create resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create static web app
az staticwebapp create \
    --name $STATIC_WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --branch $BRANCH \
    --repository-url "https://github.com/$GITHUB_REPO" \
    --login-with-github \
    --app-location "/" \
    --output-location "dist" \
    --sku Free
```

## Option 2: Azure App Service

For more control, you can use Azure App Service with a Node.js build process.

### Deploy Steps:

1. **Create Web App in Azure Portal:**
   - Go to Azure Portal → Create a resource → Web App
   - Choose Node.js runtime
   - Select your subscription and resource group

2. **Configure Deployment:**
   - Go to Deployment Center
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `dist`

3. **Configure App Settings:**
   - Go to Configuration → Application settings
   - Add:
     - `SCM_DO_BUILD_DURING_DEPLOYMENT`: `true`
     - `WEBSITE_NODE_DEFAULT_VERSION`: `~18`

## Option 3: Azure Storage Static Website

Simple option for static hosting without CI/CD.

### Steps:

1. **Create Storage Account:**
   ```bash
   az storage account create \
     --name sowsfashionstorage \
     --resource-group sows-fashion-rg \
     --location eastus \
     --sku Standard_LRS
   ```

2. **Enable Static Website:**
   ```bash
   az storage blob service-properties update \
     --account-name sowsfashionstorage \
     --static-website \
     --404-document index.html \
     --index-document index.html
   ```

3. **Upload Files:**
   ```bash
   # Build your app locally
   npm run build

   # Upload dist folder
   az storage blob upload-batch \
     --account-name sowsfashionstorage \
     --source ./dist \
     --destination \$web
   ```

## Post-Deployment Configuration

### 1. Custom Domain (Optional)
1. Go to your Static Web App in Azure Portal
2. Click **"Custom domains"**
3. Click **"Add"**
4. Enter your domain name
5. Follow DNS configuration instructions

### 2. Environment Variables
If you need environment variables, add them in:
- Azure Portal → Static Web App → Configuration → Application settings

### 3. Configure Routes
Ensure your `staticwebapp.config.json` (if created) handles React routing properly.

## Troubleshooting

### Build Failures
- Check GitHub Actions logs in your repository
- Verify `package.json` build script is correct
- Ensure Node.js version is compatible (18+)

### 404 Errors on Routes
- Add/update `staticwebapp.config.json` with proper routing rules
- Ensure `routes.json` or `staticwebapp.config.json` includes fallback to `index.html`

### Images Not Loading
- Verify image paths are relative
- Check that images in `public` folder are included in build

## Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] Azure account created
- [ ] Static Web App created in Azure Portal
- [ ] GitHub repository connected
- [ ] Build workflow configured correctly
- [ ] First deployment successful
- [ ] Test all routes and functionality
- [ ] Configure custom domain (if needed)

## Useful Commands

```bash
# View your Static Web App
az staticwebapp list --resource-group sows-fashion-rg

# Get deployment URL
az staticwebapp show --name sows-fashion --resource-group sows-fashion-rg --query "defaultHostname" -o tsv

# View deployment status
az staticwebapp environment show --name sows-fashion --resource-group sows-fashion-rg
```

## Support

For issues:
- Azure Static Web Apps Docs: https://docs.microsoft.com/azure/static-web-apps
- Azure Support: https://azure.microsoft.com/support

