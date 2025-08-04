# Deployment Guide - Render CI/CD Pipeline

This guide explains how to set up continuous integration and deployment (CI/CD) for the Lendsqr Frontend Test application using GitHub Actions and Render.

## 🚀 Quick Setup

### 1. Render Setup

1. **Create a Render Account**

   - Go to [render.com](https://render.com) and sign up
   - Connect your GitHub account

2. **Create a New Web Service**

   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `chukwudi34/lendsqr-fe-test`
   - Configure the service:
     - **Name**: `chukwudi34-lendsqr-fe-test`
     - **Environment**: `Node`
     - **Build Command**: `npm ci && npm run build`
     - **Publish Directory**: `dist`
     - **Plan**: Free

3. **Get Service Details**

   - After creation, note down:
     - Service ID (from the URL: `srv-xxxxxxxxxxxxx`)
     - Your app URL (e.g., `https://chukwudi-nwafor-lendsqr-fe-test.onrender.com`)

4. **Get API Key**

   - Go to Account Settings → API Keys
   - Create a new API key
   - Copy the key (you'll need it for GitHub secrets)

### 2. GitHub Secrets Setup

In your GitHub repository, go to Settings → Secrets and variables → Actions, then add:

| Secret Name         | Description             | Example Value                                     |
| ------------------- | ----------------------- | ------------------------------------------------- |
| `RENDER_SERVICE_ID` | Your Render service ID  | `srv-xxxxxxxxxxxxx`                               |
| `RENDER_API_KEY`    | Your Render API key     | `rnd_xxxxxxxxxxxxx`                               |
| `RENDER_APP_URL`    | Your app URL (optional) | `https://chukwudi34-lendsqr-fe-test.onrender.com` |

### 3. Repository Configuration

The following files are already configured in your repository:

- **`.github/workflows/deploy.yml`** - GitHub Actions workflow
- **`render.yaml`** - Render service configuration
- **`package.json`** - Updated with deployment scripts

## 🔄 CI/CD Workflow

### Automatic Deployment Triggers

The pipeline automatically runs when:

- Code is pushed to `main` or `master` branch
- Pull requests are created (testing only, no deployment)

### Workflow Steps

1. **Testing Phase**:

   - Install dependencies
   - Run ESLint for code quality
   - Run TypeScript type checking
   - Build the project
   - Run tests (if available)

2. **Deployment Phase** (only on main/master):

   - Build production version
   - Deploy to Render
   - Perform health check
   - Notify deployment status

### Manual Deployment

You can also trigger deployments manually:

1. **Via GitHub Actions**:

   - Go to Actions tab in your repository
   - Select "Deploy to Render" workflow
   - Click "Run workflow"

2. **Via Render Dashboard**:

   - Go to your service in Render dashboard
   - Click "Manual Deploy" → "Deploy latest commit"

## 🛠️ Configuration Details

### Environment Variables

The following environment variables are automatically set:

- `NODE_VERSION`: 20.11.1
- `NPM_CONFIG_PRODUCTION`: false (needed for build tools)
- `VITE_APP_NAME`: Lendsqr Frontend Test
- `VITE_APP_VERSION`: 1.0.0

### Build Configuration

- **Build Command**: `npm ci && npm run build`
- **Output Directory**: `dist`
- **Node Version**: 20.x
- **Static Site**: Yes (SPA with client-side routing)

### Security Headers

The following security headers are automatically added:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 🔍 Monitoring and Troubleshooting

### Deployment Status

Monitor your deployments:

1. **GitHub Actions**: Check the Actions tab for build/deploy status
2. **Render Dashboard**: View deployment logs and service status
3. **Health Checks**: Automatic health checks verify deployment success

### Common Issues

1. **Build Failures**:

   - Check GitHub Actions logs
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation passes locally

2. **Deployment Failures**:

   - Check Render service logs
   - Verify GitHub secrets are correctly set
   - Ensure service ID and API key are valid

3. **Runtime Issues**:

   - Check browser console for errors
   - Verify environment variables are set
   - Test locally with `npm run build && npm run preview`

### Logs Access

- **GitHub Actions Logs**: Repository → Actions → Select workflow run
- **Render Logs**: Render Dashboard → Your Service → Logs tab
- **Application Logs**: Browser Developer Tools → Console

## 🚀 Deployment URL

Your application will be available at:
**https://chukwudi34-lendsqr-fe-test.onrender.com**

## 📊 Performance Optimization

### Build Optimization

The build process includes:

- TypeScript compilation
- Vite bundling and minification
- Asset optimization
- Tree shaking for smaller bundle size

### Render Optimizations

- Static file serving with CDN
- Automatic HTTPS
- Global edge locations
- Automatic scaling

## 🔄 Updating the Application

To deploy updates:

1. **Make your changes** in a feature branch
2. **Create a pull request** (triggers testing)
3. **Merge to main** (triggers automatic deployment)
4. **Monitor deployment** in GitHub Actions and Render dashboard

## 📝 Additional Notes

- **Free Tier Limitations**: Render free tier may have cold starts
- **Custom Domain**: Can be configured in Render dashboard (paid plans)
- **SSL Certificate**: Automatically provided by Render
- **Backup Deployments**: Alternative deployment method included in workflow

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review GitHub Actions and Render logs
3. Verify all secrets and configuration
4. Test the build process locally

---

**Note**: This deployment configuration is optimized for the Lendsqr Frontend Engineering Assessment requirements.
