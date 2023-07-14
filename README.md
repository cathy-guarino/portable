# News App

## Progress Update

This is an implementation of the News Application brief. 

The application has been built with Javascript, React and Redux on the frontend, and Node and Express on the backend.  

### Features Included 

- **Search** - The Guardian content API is queried to bring back article results. Searches are submitted as the user types. 
- **Result display** - Clicking on a result will display the full article.
- **Wrapped API** - The server includes a basic wrapping of the Guardian endpoints. 
- **Result caching** - Duplicate requests to do not result in running multiple identical API requests. 

### Features Not Included

Due to limited time constraints, the following features are not currently included in the application. They have however been considered in the design such that they can be integrated easily. 

- **Results grouping** - The brief suggested that results should be grouped by their section. Currently the section name is displayed with each result, but results are not organised or displayed with others in their section. 
- **Pinning** - the pinning feature is not included. 

### Limitations

There are a few pieces of functionality that would be typical to expect in an app like this, even though they were not mentioned in the brief. The following items would have been implemented if more time was available: 

- **Results pagination** - The app currently brings back 10 results per search. Future development should integrate support for a pagination mechanism whereby more results can be requested either automatically by the client (eg as an infinite scroll mechanism) or manually by the user (eg through pagination or 'next' buttons).
- **Routing** - currently this is a single page app with no client side routing. This means that the view history is not recorded in the browser and the browser back button cannot be used. 
- **Search Debouncing** - It is not efficient to initiate a full search request on every keypress by the user. The search function should implement debouncing so that the search is only submitted when the user pauses briefly.
- **Robust error handling and testing** -  This is a big one! Due to time constraints error handling and testing has not been included. This would be critical to focus on with any further development. 
- **Visual design** - Focus has not been put on the visual design of the app. 
- **Empty states** - For better user experience, messages should be shown when no results are available for a search, along with an easy means to reset the search

## Intro

This code activity is a way for you to show us your development skills -
we’re just as interested in how you think through a problem and approach
designing a solution as we are in the code that you write.

Please give this page a read through before we come back together and
chat through any questions you might have.

## Brief

The app we are building today is a proof of concept prototype towards a
news search / research tool where a user could:

- Search against one or more news sites / services for terms they are
  interested in
- Get a collated list of results, click through to read further the
  articles of interest.
- Pin or bookmark articles to read later or follow up.

We may or may not build all of this in the session and that's totally
fine. Just keep this in mind as background, to maybe help guide
decisions you might make.

For today we'll focus on a single source, the Guardian’s content API -
[https://open-platform.theguardian.com/](https://open-platform.theguardian.com/)

The app should present a text field for the user to type their search
terms, *as the user types* it should take that input and use it to
perform a search against

Given the result of that API call it should display a list of results,
grouped by the Section of the Guardian the items are found in.

### Specifics

- The application should be built in (React if you are doing the
  frontend coding challenge, an MVC framework of your preference if you
  are doing the backend coding challenge)
    - The application should not call the Guardian API directly, rather
      we'd like to see you build your own API as a proxy for the
      Guardian one
- Each item should show:
    - The Title
    - A link to the article
    - The publication date (formatted as DD/MM/YYYY).
    - A button or checkbox that allows it to be pinned.
        - Pinned items should appear below the search results, and stay
          on screen as search results change.

Use whichever libraries and frameworks that will help you get the job
done. Use any UI framework or prebuilt design system that works for you.
We might have a conversation about the choices you make, so it’s great
if you have a solid reason for them.

## What we’re looking for

- A working app pushed to your own Github account - please fork the repo
  and start with one of the branches for your chosen technology stack.
- A good idea of the decisions you have made while building this. Why
  you did it *this way* and not *that way* and what that means. What are
  you locking yourself into and what are you deferring to later. What is
  going to matter for ongoing performance, scalability, extensibility,
  robustness.

## **What we’re not looking for, as much**

- **Visual design.** Beyond a basic idea of clarity, any visual design
  touches are *entirely* optional. Some developers prefer to leave the
  design to designers, some get a kick out of making things *just so*.
  We like both kinds.
