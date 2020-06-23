import pyglet

from Grid import gridCell

class Window(pyglet.window.Window):

    def __init__(self):
        super().__init__()
        self.set_size(600, 600)
        self.gridCell = gridCell(self.get_size()[0],  self.get_size()[1], 20)

    def on_draw(self):
        self.clear()
        self.gridCell.draw()



if __name__ == '__main__':
    window = Window()
    pyglet.app.run()
