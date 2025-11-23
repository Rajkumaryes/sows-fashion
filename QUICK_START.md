# Quick Start: Deploy to Azure in 5 Minutes

## Fastest Method - Azure Portal GUI

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Azure deployment"
git push origin main
```

### Step 2: Create Static Web App
1. Visit: https://portal.azure.com
2. Click **"+ Create"** → Search **"Static Web App"**
3. Click **"Create"**

### Step 3: Fill in Details
- **Name**: `sows-fashion` (must be globally unique)
- **Subscription**: Your subscription
- **Resource Group**: Create new: `sows-fashion-rg`
- **Region**: Choose closest (e.g., `East US`)
- **Plan**: Free

### Step 4: Connect GitHub
- Click **"Sign in with GitHub"**
- Authorize Azure
- Select your repository: `sows-fashion`
- Branch: `main`
- Build Presets: **Custom**

### Step 5: Build Configuration
- **App location**: `/` (root)
- **Output location**: `dist` (Vite output folder)

### Step 6: Deploy!
- Click **"Review + create"**
- Click **"Create"**
- Wait 2-3 minutes for first deployment
- Get your URL from the **Overview** page

## Your Site Will Be Live At:
`https://<your-app-name>.azurestaticapps.net`

## Verify Deployment
1. Go to your GitHub repository
2. Check **Actions** tab for deployment status
3. Once green ✅, visit your Azure Portal Static Web App
4. Click **"Browse"** to see your live site

## Troubleshooting
- **Build fails?** Check GitHub Actions logs
- **404 on routes?** The `staticwebapp.config.json` handles this
- **Images missing?** Ensure paths are relative (not absolute)

## Next Steps
- Add custom domain in Azure Portal → Custom domains
- Set up staging environment (use different branch)
- Configure environment variables if needed

That's it! Your site is now live on Azure! 🚀

