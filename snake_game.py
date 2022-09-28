import time
import pygame
import random
pygame.init()
############################################## User Settings #####################################################
#Potential to add customisations in a menu for the colours
background_colour = (0,0,0)
snake_colour = (180,36,240)
food_colour = (255,255,255)

maxWidth = 500
maxHeight = 500

foodX = round(random.randrange(0, maxWidth - 10) / 10.0) * 10.0
foodY = round(random.randrange(0, maxHeight - 10) / 10.0) * 10.0
playerScore = 0
snakeCoor = []
x = round(maxWidth/2)
y = round(maxHeight/2)

dx = 0
dy = 0
game_over = False
#################################################################################################################


displayScreen = pygame.display.set_mode((maxWidth,maxHeight))
pygame.display.update()
clock = pygame.time.Clock()

while game_over != True:
    for event in pygame.event.get():    
        if event.type==pygame.QUIT:
            game_over=True
        if event.type == pygame.KEYDOWN: #Code to check the user inputs for direction needs to be modified so that the player cannot reverse direction
            if event.key == pygame.K_w or event.key == pygame.K_UP:
                dx = 0
                dy = -10
            elif event.key == pygame.K_a or event.key == pygame.K_LEFT:
                dx = -10
                dy = 0
            elif event.key == pygame.K_s or event.key == pygame.K_DOWN:
                dx = 0
                dy = 10
            elif event.key == pygame.K_d or event.key == pygame.K_RIGHT:
                dx = 10
                dy = 0
    if x >= maxWidth:
        x = 0
    elif y >= maxHeight:
        y = 0
    elif x < 0:
        x = maxWidth
    elif y < 0:
        y = maxHeight

    x = x + dx
    y = y + dy

    displayScreen.fill(background_colour)
    pygame.draw.rect(displayScreen, food_colour, [foodX, foodY, 10, 10])
    snakeFront = []
    snakeFront.append(x)
    snakeFront.append(y)
    snakeCoor.append(snakeFront)
    #Code Required to take snake coordinate and append to a list and extend the snake each time it collides with food

    #Code Required to remove food each time the snake collides with food

    pygame.draw.rect(displayScreen,snake_colour,[x,y,10,10])
    pygame.display.update()

    if x == foodX and y == foodY:
        playerScore = playerScore + 1
        print(playerScore)


    clock.tick(20)   #Potential to add difficulties by changing the clock tick speed and or size of the play area.

displayScreen.fill((255,255,255))

my_msg = pygame.font.SysFont('arial',48)
# text_surface = my_msg.render('Game Over', False, (255, 0, 0))
# displayScreen.blit(text_surface, (maxWidth/3,maxHeight/3))
# time.sleep(2)  
displayScreen.fill((255,255,255))
text_surface = my_msg.render(f"Your Score : {playerScore}", False, (255, 0, 0))
displayScreen.blit(text_surface, (maxWidth/3,maxHeight/3))

pygame.display.update()
time.sleep(2)   
pygame.quit()
quit()

