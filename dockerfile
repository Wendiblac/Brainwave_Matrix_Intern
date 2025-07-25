# Use Nginx as the base image
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy all Vite build output files (after `npm run build`)
COPY dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
