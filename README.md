# ImageTransform

### Upload any image and convert it into art with several different effects !!

This application is nice and simple to understand, simply upload any image (PNG, JPG, JPEG) or use any of the preloaded images to view how some basic image transformations change your image into art (it's subjective). 

The transformations are in the following order: 

#### Normal
Does not change your image at all, just displays it at the very top of the stack.

![image](https://user-images.githubusercontent.com/108653536/235309612-24c39257-d869-49e2-96ed-1f2f01f61997.png)


#### Inverted 
Takes every pixels RGB value and inverts it by subtracting the value from 255 (the max RGB value).

![image](https://user-images.githubusercontent.com/108653536/235309652-dea8e6b3-b4f3-44a5-9390-65291ef76a4a.png)

#### Dotted
Takes a section of pixels and find the average RBG value of said section. Creates a circle and places it in 
the middle of that section, making sure it doesn't interact with other circles. Once the circle has been placed
we simply fill it with our average RGB value we found. 

![image](https://user-images.githubusercontent.com/108653536/235309664-cf89121d-477d-431b-a4b0-55c6a4b26027.png)

#### ASCII
Similar to the dotted image, we first start by taking the average RBG value of a specified block of pixels on the image, 
then we find the greyscale of that image by taking the average of those RGB numbers in the average. Once that's been done
we use a mapping function to map the greyscale number to a letter in our ASCII ascension table. Once we know what letter
we are going to place in the <canvas> we color it acording to the found average, and place it in the same location where
the block of pixels was first analyzed. 

![image](https://user-images.githubusercontent.com/108653536/235309675-b629faef-4556-4b13-9c8f-b79b79ee4a40.png)

#### Solarize 
Similar to the inverted function, we are able to create this effect by taking subtracting from the 255 RGB max, but this time
we do it only if the RGB goes past a max. Otherwise, we do not subtract it. Changing this range will change how the solarize 
effect looks, feel free to play with it. You can find the function directly in 'analyzer.js'.

![image](https://user-images.githubusercontent.com/108653536/235309694-eb1ee102-16c0-4715-9223-698846f7e26d.png)

#### Greyscale
This one is pretty straight forward, for every pixel we take it's RGB value and then take the average of that single value, 
once the average is found then we set the RGB values for that pixel all to be that average found, that way its always a range
between white and black {(0, 0, 0) - (255, 255, 255)}.

![image](https://user-images.githubusercontent.com/108653536/235309715-bac1de5c-94f5-4c73-9262-e22724a8f2d2.png)
