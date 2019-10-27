# COMP30022 ITProject: Fantastic 4

## Dependencies
- NPM ver. 6.12 or later
- Node.js ver. 10.x.x
- MySQL 5.7

## Getting started:

### Setting up your MySQL Database
1. Install MySQL 5.7
2. Run [these](https://gist.github.com/garviin/c40ab4ffe6a7e08566b52a82301b037b) create scripts on your MySQL server.

### Installation
1. Install dependencies listed above
2. Run this command in root directory:
```
npm install && cd client && npm install
```
3. Create .env file containing your MySQL admin info as such:

```
# local database
DB_HOST=<host address>
DB_USER=<username>
DB_PASS=<password>
DB_DATABASE=<name of database>
```

## Running the app:
- Run this command at root directory:
```
npm run dev
```
## Authors
   - [Yusuke Noishiki](https://github.com/n-yuusuke)
   - Sean Wong
   - Trung Lai (Tommy)
   - [Garvin Bulkin](https://github.com/garviin/)

## Our Functionalities:
#### 1. **CRUD** operation for artifacts:
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
2. **Timelime:**
- Implemented by: Garvin & Sean
  - [x] Design/Frontend
  - [x] Backend routes/HTTP request
  - [x] Display sorted artifact by date
  - [x] Filter by date function
---
3. **Family-Tree:**
- Implemented by: Sean
  - [x] Design/Frontend
  - [x] Backend routes/HTTP request
  - [x] Link family member tree button (Tommy)
  - [x] Add family member (Tommy)
  - [x] Display several family tree
  - [x] Display respective family member artifacts
---
4. **Export Artifact:**
- Implemented by: [Yusuke](https://github.com/n-yuusuke)
  - [x] Get artifacts table from MySQL DB
  - [x] Export data to JSON
  - [x] Export data to PDF
  - [x] Design/Frontend
  - [x] Backend route/HTTP request
  - [x] Allow users to download file
---
5. **Search function:**
- Implemented by: [Yusuke](https://github.com/n-yuusuke)
  - [x] Get all artifacts from MySQL DB
  - [x] Match artifacts query
  - [x] Dynamically display results
  - [x] Dynamically display images
  - [x] Design/Frontend
  - [x] Backend routes/HTTP request
---
6. **Comments section:**
- Implemented by: Sean & Garvin & [Yusuke](https://github.com/n-yuusuke)
  - [x] Design/Frontend
  - [x] Backend routes/HTTP request
  - [x] Display comments from database
  - [x] Post comments
