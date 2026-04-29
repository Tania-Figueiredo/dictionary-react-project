# React Dictionary App

React dictionary app using external APIs to combine definitions, phonetics and image results.

## Overview

This project lets users search for English words and view definitions, phonetics, synonyms and related images. It focuses on combining multiple API responses into one clear interface.

## What It Shows

- React component structure
- API requests with Axios
- Data parsing from external APIs
- Conditional rendering for search results
- Image results connected to user search input
- Responsive UI using Bootstrap and custom CSS

## Tech Stack

- React
- JavaScript
- Axios
- Bootstrap
- Custom CSS
- DictionaryAPI.dev
- Pexels API

## APIs Used

- [DictionaryAPI.dev](https://dictionaryapi.dev/) for word definitions, phonetics and examples.
- [Pexels API](https://www.pexels.com/api/) for related image results.

## Environment Variables

The Pexels API key should be stored locally in an `.env` file:

```bash
REACT_APP_PEXELS_API_KEY=your_api_key_here
```

The `.env` file should not be committed to the public repository.

## Links

- Live demo: [reactaddondictionary.netlify.app](https://reactaddondictionary.netlify.app/)
- Repository: [github.com/Tania-Figueiredo/dictionary-react-project](https://github.com/Tania-Figueiredo/dictionary-react-project)

## Run Locally

```bash
git clone https://github.com/Tania-Figueiredo/dictionary-react-project.git
cd dictionary-react-project
npm install
npm start
```
