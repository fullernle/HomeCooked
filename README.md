# HomeCooked

[Live](https://homecooked--app.herokuapp.com/#/)

Have you ever been in this situation? You want Pho, but with the love and care of a personal cook. You can't go to just any restaurant to get that, but you don't have someone you know that can create it either. You know what you do have? HomeCooked. The home food delivery service created for home cooks. Not only are you supporting your local community, but you're getting a great experience as well.

![homecooked home](https://user-images.githubusercontent.com/63718493/124969572-b7d5b500-dfdb-11eb-8168-514bbd4e4023.png)

------------------------------------------------------

## Overview 

HomeCooked will be a website similar to that of other food delivery services.  It will be a service that will allows users to search for scratch-made food around their area.  This will at first be secluded to the San Francisco-Bay Area, but hopefully, with time, be expanded to the national level (perhaps even international?). Users would be able to browse business listings and order food from those businesses.


-  [x] User authorization: sign up and login 
![login_session](https://user-images.githubusercontent.com/63718493/124989229-c62fcb00-dff3-11eb-9dfa-a780131e5c23.gif)

-  [x] Search functionality
![search](https://user-images.githubusercontent.com/63718493/124989245-cc25ac00-dff3-11eb-8b29-38dd99e45bfb.gif)

-  [x] Interactive web page for ordering meals 
![interactive_order_small](https://user-images.githubusercontent.com/63718493/124989383-ecee0180-dff3-11eb-88ef-fb34cc45f3af.gif)

-  [x] Ability to create Reviews 
![review](https://user-images.githubusercontent.com/63718493/124989391-f0818880-dff3-11eb-8279-034fb1dcf64d.gif)

-  [x] Cart integration 
![cart_integration](https://user-images.githubusercontent.com/63718493/124989400-f37c7900-dff3-11eb-99ba-993bb80fb953.gif)


#### Bonus Features 
-  [ ] Cook-side of user auth and profile page 
-  [ ] Extending locations to state, then national.


HomeCooked's core product is a web application, with a back-end build on MongoDB to save user auth, products, and business information. It will be built using the MERN stack (MongoDB, Express, React, and Node). 

## Backend: MongoDB/Express 

We will be using MongoDB for our database and Mongoose as our ODM. We store all information regarding users, products, and businesses in our database.

Express is used for our Node.js application framework.

## Frontend: React/Redux/Node.js 


We are using React to create and manage our UI components.

Redux is used to manage the global state. 

SCSS modules are used to style our components.

## Technical Challenges
* Using mapbox API to incorporate their map feature 
* Fetching the correct data for each cook
* Updating the cart as they add more items
* Implementing an effective search.

## Code Snippet 
Review Wrapper on Business Page
```jsx
<div className={styles.ReviewWrapper}>
            <h4>Reviews</h4>
            {(currentUser &&
              Object.keys(currentUser).length === 0 &&
              currentUser.constructor === Object) ||
            currentUser === undefined ? (
              <span> Login to leave a review! </span>
            ) : (
              <ReviewsContainer businessId={this.props.match.params.id} />
            )}
            <div className={styles.ReviewsListWrapper}>
              {business.reviews.length === 0 ? (
                <span> No reviews yet! Be the first! </span>
              ) : (
                <div className={styles.ReviewsList}>
                  {business.reviews.reverse().map((review) => {
                    return (
                      <div className={styles.SingleReview}>
                        <div>
                          <h5>{review.username}</h5>
                          <div>
                            {review.rating === 0
                              ? "0 stars"
                              : Array(Math.floor(review.rating)).fill(
                                  <MyStar2></MyStar2>
                                )}
                          </div>
                        </div>
                        <span>{this.timeStamp(review.createdAt)}</span>
                        <p>{review.body}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
 ```
Business Index
```jsx
return (
          <div className={styles.Wrapper}>
            <div className={styles.List}>
              {bussList.length === 0 ? (
                <p className={styles.NoResults}>
                  No results for "{this.props.query}"
                </p>
              ) : (
                bussList.map((business) => {
                  return (
                    <>
                      <Link
                        to={`/homecook/${business._id}`}
                        className={styles.Item}
                      >
                        <div className={styles.Details}>
                          <Link
                            className={styles.NavLink}
                            to={`/homecook/${business._id}`}
                          >
                            {business.name}
                          </Link>
                          <p className={styles.Categories}>
                            {business.categories[0].title},{" "}
                            {business.categories[1].title},{" "}
                            {business.categories[2].title}{" "}
                          </p>
                          <p>{business.location.display_address[0]}</p>
                          <p>{business.location.display_address[1]}</p>
                        </div>
                        <p className={styles.PhotoWrapper}>
                          <img
                            className={styles.Photo}
                            src={this.getImage(business.products[0])}
                            alt=""
                          />
                        </p>
                      </Link>
                    </>
                  );
                })
              )}
            </div>
          </div>
        );
        ```
