# Candidate Search Engine

A React application that enables HR professionals and recruiters to efficiently browse through GitHub profiles to find potential job candidates. Built with React, TypeScript, and the GitHub API.

## Description

This application streamlines the candidate search process by:

- Fetching GitHub user profiles through the GitHub API
- Displaying relevant candidate information in a clean interface
- Allowing quick accept/reject decisions with a simple +/- interface
- Managing a list of saved candidates

## Using the Application

1. **Browse Candidates**

   - The app displays one GitHub profile at a time
   - View candidate details including:
     - Profile picture
     - Name
     - Location
     - Email
     - Company
     - GitHub profile link

2. **Make Decisions**

   - Click "+" to save a candidate
   - Click "-" to skip and view the next candidate

3. **View Saved Candidates**
   - Access your list of saved candidates
   - Review previous selections

## Technical Details

### Built With

- React 18
- TypeScript
- Vite
- GitHub REST API
- React Router DOM
- React Icons

### Project Structure

## Local Development Setup

### Prerequisites

- Node.js
- npm
- GitHub account

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/Joelogical/Candidate-Search-Engine.git
cd candidate-search-engine
```

2. Install dependencies:

```bash
npm install
```

To preview production build:

```bash
npm run build
npm run preview
```
