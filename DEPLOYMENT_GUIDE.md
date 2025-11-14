# 🚀 Deployment Guide - Seesaw Simulation

## Quick Start Deployment to GitHub Pages

Follow these steps to deploy your seesaw simulation to GitHub Pages.

### Prerequisites
- GitHub account ([@Holytear](https://github.com/Holytear))
- Git configured on your local machine
- Project files ready in your repository

---

## Step-by-Step Deployment Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository settings:
   - **Name**: `seesaw-simulation` (or any name you prefer)
   - **Description**: "Physics-based seesaw simulation with pure JavaScript"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### 2. Connect Local Repository to GitHub

Open your terminal in the project directory and run:

```bash
# Add the remote repository (replace 'Holytear' with your username if different)
git remote add origin https://github.com/Holytear/seesaw-simulation.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git push -u origin master
```

**Alternative using SSH:**
```bash
git remote add origin git@github.com:Holytear/seesaw-simulation.git
git push -u origin master
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `master` (or `main`)
   - **Folder**: Select `/ (root)`
5. Click "Save"

### 4. Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-3 minutes
- You'll see a green checkmark when it's ready
- A message will appear: "Your site is live at https://holytear.github.io/seesaw-simulation/"

### 5. Access Your Live Site

Your simulation will be available at:
```
https://holytear.github.io/seesaw-simulation/
```

---

## Updating Your Deployment

Whenever you make changes, simply:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Your commit message"

# Push to GitHub
git push origin master
```

GitHub Pages will automatically redeploy within a few minutes.

---

## Troubleshooting

### Issue: 404 Page Not Found

**Solution:**
- Wait a few more minutes (deployment can take up to 10 minutes)
- Check that your repository is public
- Verify the branch and folder settings in GitHub Pages settings

### Issue: CSS/JS Not Loading

**Solution:**
- Ensure file paths in `index.html` are relative (not absolute)
- Check that file names match exactly (case-sensitive)
- Clear your browser cache and hard refresh (Ctrl+F5)

### Issue: Changes Not Appearing

**Solution:**
- Wait 2-3 minutes after pushing
- Check the "Actions" tab to see if deployment is still in progress
- Clear browser cache
- Try opening in incognito/private mode

### Issue: Push Rejected

**Solution:**
```bash
# Pull the latest changes first
git pull origin master --rebase

# Then push again
git push origin master
```

---

## Custom Domain (Optional)

If you want to use a custom domain:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your repository, go to Settings → Pages
3. Under "Custom domain", enter your domain
4. Add a `CNAME` file to your repository with your domain
5. Configure DNS settings at your registrar:
   - Add A records pointing to GitHub's IPs
   - Or add a CNAME record pointing to `holytear.github.io`

---

## Verification Checklist

After deployment, verify:

- [ ] Site loads without errors
- [ ] All CSS styles are applied correctly
- [ ] JavaScript functionality works (click to add weights)
- [ ] Physics calculations are correct
- [ ] localStorage persistence works
- [ ] Reset button functions properly
- [ ] Responsive design works on mobile
- [ ] No console errors in browser DevTools

---

## Performance Optimization

Your site is already optimized with:
- ✅ Pure JavaScript (no heavy frameworks)
- ✅ Minimal CSS (no external libraries)
- ✅ No external dependencies
- ✅ Fast loading times

For further optimization:
- Consider adding a service worker for offline functionality
- Implement code splitting if the project grows
- Optimize images if you add any

---

## Monitoring

### GitHub Pages Statistics

1. Go to repository "Insights" tab
2. Check "Traffic" to see visitor statistics
3. Monitor "Popular content" to see which pages get views

### Analytics (Optional)

Add Google Analytics by inserting this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

---

## Security Considerations

- ✅ No sensitive data exposed (no API keys, passwords)
- ✅ No backend or database (static site only)
- ✅ No user authentication required
- ✅ localStorage data stays local to user's browser

---

## Backup Strategy

Your code is already backed up on GitHub, but consider:

1. **Regular Commits**: Commit frequently with descriptive messages
2. **Branching**: Create branches for experimental features
3. **Releases**: Tag important versions
4. **Local Backup**: Keep a local copy outside of the project folder

```bash
# Create a release tag
git tag -a v1.0 -m "Version 1.0 - Initial release"
git push origin v1.0
```

---

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Summary

1. ✅ Create GitHub repository
2. ✅ Push local code to GitHub
3. ✅ Enable GitHub Pages in settings
4. ✅ Wait for deployment (1-3 minutes)
5. ✅ Access at `https://holytear.github.io/seesaw-simulation/`
6. ✅ Share your simulation with the world!

---

**Need Help?**

If you encounter issues:
1. Check the troubleshooting section above
2. Review GitHub Pages documentation
3. Check GitHub repository "Actions" tab for build errors
4. Verify all file paths and names are correct

**Good luck with your deployment! 🎉**

---

*Last Updated: November 14, 2025*
*Author: Selim Yalcintas (@Holytear)*

