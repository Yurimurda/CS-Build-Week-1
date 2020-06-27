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

    def on_draw(self):
        self.clear()
        self.gridCell.draw()
        self.gridCell.ruleSet()



if __name__ == '__main__':
    window = Window()
    pyglet.app.run()
