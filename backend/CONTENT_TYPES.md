# Strapi Content Types Configuration

This directory contains schema examples for Strapi content types that you can use for your portfolio.

## How to Create Content Types

1. Start Strapi: `npm run develop` in the backend directory
2. Navigate to http://localhost:1337/admin
3. Go to Content-Type Builder (in the left sidebar)
4. Click "Create new collection type" or "Create new single type"
5. Follow the field configurations below

## Recommended Content Types

### 1. Projects (Collection Type)

**API ID singular:** project
**API ID plural:** projects

Fields:
- **title** (Text)
  - Short text
  - Required
  
- **slug** (UID)
  - Attached to: title
  - Required
  
- **description** (Rich text)
  - Markdown or WYSIWYG
  
- **shortDescription** (Text)
  - Short text
  - Max length: 200
  
- **thumbnail** (Media)
  - Single media
  - Allowed types: images
  
- **images** (Media)
  - Multiple media
  - Allowed types: images
  
- **technologies** (JSON)
  - For storing array of technology names
  
- **projectUrl** (Text)
  - URL format
  
- **githubUrl** (Text)
  - URL format
  
- **featured** (Boolean)
  - Default: false
  
- **order** (Number)
  - Integer
  - For custom sorting

---

### 2. Skills (Collection Type)

**API ID singular:** skill
**API ID plural:** skills

Fields:
- **name** (Text)
  - Required
  
- **category** (Enumeration)
  - Values: Frontend, Backend, DevOps, Design, Other
  - Required
  
- **level** (Number)
  - Integer
  - Min: 0, Max: 100
  
- **icon** (Media)
  - Single media
  - SVG or PNG
  
- **description** (Text)
  - Short description

---

### 3. Experience (Collection Type)

**API ID singular:** experience
**API ID plural:** experiences

Fields:
- **company** (Text)
  - Required
  
- **position** (Text)
  - Required
  
- **description** (Rich text)
  
- **startDate** (Date)
  - Date only
  - Required
  
- **endDate** (Date)
  - Date only
  
- **current** (Boolean)
  - Default: false
  
- **location** (Text)
  
- **logo** (Media)
  - Single media

---

### 4. About (Single Type)

**API ID:** about

Fields:
- **name** (Text)
  - Your full name
  
- **title** (Text)
  - Your professional title
  
- **bio** (Rich text)
  - Your professional bio
  
- **profileImage** (Media)
  - Single media
  
- **email** (Email)
  
- **phone** (Text)
  
- **location** (Text)
  
- **resume** (Media)
  - Single media (PDF)
  
- **socialLinks** (JSON)
  - Example:
    ```json
    {
      "github": "https://github.com/username",
      "linkedin": "https://linkedin.com/in/username",
      "twitter": "https://twitter.com/username"
    }
    ```

---

### 5. Contact Messages (Collection Type) - Optional

**API ID singular:** contact-message
**API ID plural:** contact-messages

Fields:
- **name** (Text)
  - Required
  
- **email** (Email)
  - Required
  
- **subject** (Text)
  
- **message** (Text)
  - Long text
  - Required
  
- **read** (Boolean)
  - Default: false

---

## API Permissions Configuration

After creating content types, configure permissions:

1. Go to **Settings → Users & Permissions Plugin → Roles → Public**
2. Enable the following permissions:

For **Projects**:
- ✓ find
- ✓ findOne

For **Skills**:
- ✓ find
- ✓ findOne

For **Experience**:
- ✓ find
- ✓ findOne

For **About**:
- ✓ find

For **Contact Messages** (if you want a contact form):
- ✓ create

3. Save the changes

## Using the API

After setting up content types and permissions, you can fetch data:

```typescript
// Get all projects
const projects = await fetchAPI('/projects?populate=*');

// Get featured projects only
const featured = await fetchAPI('/projects?filters[featured][$eq]=true&populate=*');

// Get single project by slug
const project = await fetchAPI('/projects?filters[slug][$eq]=my-project&populate=*');

// Get all skills grouped by category
const skills = await fetchAPI('/skills?sort=category:asc,level:desc');

// Get about information
const about = await fetchAPI('/about?populate=*');
```

## Tips

- Always use `populate=*` to include related media and relations
- Use filters for specific queries
- Enable CORS in production for your frontend domain
- Use API tokens for authenticated requests
- Consider pagination for large datasets
