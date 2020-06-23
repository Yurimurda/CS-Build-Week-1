
import random as rnd
import pyglet


class gridCell:

    def __init__(self, window_width, window_height, cell_size):
        self.grid_width = int(window_width / cell_size)
        self.grid_height = int(window_height / cell_size)
        self.cell_size = cell_size
        self.cells = []
        self.generate_cells()


    def generate_cells(self):
        for row in range(0, self.grid_height):
            self.cells.append([])
            for col in range(0, self.grid_width):
                if rnd.random() < 0.4:
                    self.cells[row].append(1)
                else:
                    self.cells[row].append(0)

    def draw(self):
        pyglet.graphics.draw_indexed(4, pyglet.gl.GL_TRIANGLES,
        [0, 1, 2, 1, 2, 3], 
        ('v2i', (300, 300, 300, 350, 350, 300, 350, 350)))