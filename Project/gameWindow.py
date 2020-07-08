import pyglet

from Grid import gridCell

class Window(pyglet.window.Window):

    def __init__(self):
        # Screen Dimensions
        super().__init__(600, 600)
        # The last int (in this case, it's 25) is important because
        # it is the cumulative setting for both the grid's cell width
        # and height. It is relative to 'self.cells' in gridCell. 
        self.gridCell = gridCell(self.get_size()[0],  self.get_size()[1], 25)
        # 
        pyglet.clock.schedule_interval(self.update, 1.0/10.0)
        #                             10 frames every 1 second


    def on_draw(self):
        self.clear()
        self.gridCell.draw()
        

    def update(self, dt):
        self.gridCell.ruleSet()
        



if __name__ == '__main__':
    window = Window()
    pyglet.app.run()



# What does it do:

# Game begins with randomly generated living cells on a 25 x 25 grid.
# The cells begin to act according to the rules perscribed
# (Look for 'ruleSet' on Grid.py).

# The rules are as follows:

# If a cell is off and it's surrounded 3 other cells, it turns on
# If a cell however is not surrounded by 3 other cells, it turns off


