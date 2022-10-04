import time
import pygame
import random
pygame.init()
############################################## User Settings #####################################################
#Potential to add customisations in a menu for the colours
background_colour = (0,0,0)
snake_colour = (180,36,240)
food_colour = (255,255,255)

maxWidth = 400
maxHeight = 400

foodX = round(random.randrange(0, maxWidth - 10) / 10.0) * 10.0
foodY = round(random.randrange(0, maxHeight - 10) / 10.0) * 10.0
playerScore = 0
snakeCoor = []
x = round(maxWidth/2)
y = round(maxHeight/2)

dx = 0
dy = 0
direction = ""
game_over = False

font = pygame.font.Font('freesansbold.ttf', 18)


#################################################################################################################


displayScreen = pygame.display.set_mode((maxWidth,maxHeight))
pygame.display.update()
clock = pygame.time.Clock()

def draw_snake(snakeCoor):
    for coor in snakeCoor:
        pygame.draw.rect(displayScreen,snake_colour,[coor[0],coor[1],10,10])

while game_over != True:
    for event in pygame.event.get():    
        if event.type==pygame.QUIT:
            game_over=True
        if event.type == pygame.KEYDOWN: #Code to check the user inputs for direction needs to be modified so that the player cannot reverse direction
            if event.key == pygame.K_w and direction != "S" or event.key == pygame.K_UP:
                direction = "N"
                dx = 0
                dy = -10
            elif event.key == pygame.K_a and direction != "E" or event.key == pygame.K_LEFT:
                direction = "W"
                dx = -10
                dy = 0
            elif event.key == pygame.K_s and direction != "N" or event.key == pygame.K_DOWN:
                direction = "S"
                dx = 0
                dy = 10
            elif event.key == pygame.K_d and direction != "W" or event.key == pygame.K_RIGHT:
                direction = "E"
                dx = 10
                dy = 0
    if x > maxWidth:
        x = 0
    elif y > maxHeight:
        y = 0
    elif x < 0:
        x = maxWidth
    elif y < 0:
        y = maxHeight

    x = x + dx
    y  = y + dy




    displayScreen.fill(background_colour)
    text = font.render(f"Score: {playerScore}", True, (0,125,25), (0,0,0))
    textRect = text.get_rect()
    textRect.center = (maxWidth/4-40, maxHeight/20-10)
    displayScreen.blit(text, textRect)

    pygame.draw.rect(displayScreen, food_colour, [foodX, foodY, 10, 10])
    snakeFront = []
    snakeFront.append(x)
    snakeFront.append(y)
    snakeCoor.append(snakeFront)
    if len(snakeCoor) > playerScore + 1:
        del snakeCoor[0]

    for i in snakeCoor[:-1]:
        if i == snakeFront:
            game_over = True

    draw_snake(snakeCoor)


    pygame.display.update()

    if x == foodX and y == foodY:
        playerScore = playerScore + 1
        foodX = round(random.randrange(0, maxWidth - 10) / 10.0) * 10.0
        foodY = round(random.randrange(0, maxHeight - 10) / 10.0) * 10.0
        print(playerScore)


    clock.tick(20)  

displayScreen.fill((255,255,255))

my_msg = pygame.font.SysFont('freesansbold.ttf',43)
displayScreen.fill((255,255,255))
text_surface = my_msg.render(f"Game Over! Your Score : {playerScore}", False, (255, 0, 0))
displayScreen.blit(text_surface, (maxWidth/3-130,maxHeight/3-60))

pygame.display.update()
time.sleep(2)   
pygame.quit()
quit()

