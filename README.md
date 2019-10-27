# COMP30022 ITProject: Fantastic 4

## Functionality:
- **CRUD** operation for artifacts:
---
  - **Create:**
  - Implemented by: [Yusuke](https://github.com/n-yuusuke)
    - [x] Form submission
    - [x] Upload multiple images
    - [x] Dynamic search function to input family members
    - [x] Design/Frontend
    - [x] Backend routes/HTTP request
    - [x] Insert to database
---
  - **Read:**
  - Implemented by: Garvin & Sean
    - [x] Query artifact Data
    - [x] Query multiple image
    - [x] Design/Frontend
    - [x] Backend routes/HTTP request
    - [x] Query from database
---
  - **Update:**
  - Implemented by: [Yusuke](https://github.com/n-yuusuke) & Sean
    - [x] Edit form submission
    - [x] Design/Frontend
    - [x] Backend routes/HTTP request
    - [x] Update artifact data to database
    - [ ] Edit/Update Image
---
  - **Delete:**
  - Implemented by: Garvin
    - [x] Design/Frontend
    - [x] Backend routes/HTTP request
    - [x] Delete from database
---
- **Timelime:**
- Implemented by: Garvin & Sean
  - [x] Design/Frontend
  - [x] Backend routes/HTTP request
  - [x] Display sorted artifact by date
  - [x] Filter by date function
---
- **Family-Tree:**
- Implemented by: Sean
  - [x] Design/Frontend
  - [x] Backend routes/HTTP request
  - [x] Link family member tree button (Tommy)
  - [x] Add family member (Tommy)
  - [x] Display several family tree
  - [x] Display respective family member artifacts
---
- **Export Artifact:**
- Implemented by: [Yusuke](https://github.com/n-yuusuke)
  - [x] Get artifacts table from MySQL DB
  - [x] Export data to JSON
  - [x] Export data to PDF
  - [x] Design/Frontend
  - [x] Backend route/HTTP request
  - [x] Allow users to download file
---
- **Search function:**
- Implemented by: [Yusuke](https://github.com/n-yuusuke)
  - [x] Get all artifacts from MySQL DB
  - [x] Match artifacts query
  - [x] Dynamically display results
  - [x] Dynamically display images
  - [x] Design/Frontend
  - [x] Backend routes/HTTP request
---

## Getting started:
1. Install dependencies in root & client folder
2. Run this command in both folders:
```
npm install --save
```
3. Create .env file containing
   - Comment out either one of them with #
```
# local database
#DB_HOST=localhost
#DB_USER=root
#DB_PASS="YOUR password"
#DB_DATABASE="Name of DB"

# Heroku Database
DB_HOST="us-cdbr-iron-east-02.cleardb.net"
DB_USER="be8270e80fd0f0"
DB_PASS="d000fef0"
DB_DATABASE="heroku_5623ab8462cff68"
```

## Running the app:
- Run this command at root folder:
```
npm run dev
```
## Authors
   - [Yusuke Noishiki](https://github.com/n-yuusuke)
   - Sean Wong
   - Trung Lai (Tommy)
   - Garvin
