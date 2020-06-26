
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

    def ruleSet(self):
        temp = []
        for row in range(0, self.grid_height):
            temp.append([])
            for col in range(0, self.grid_width):
                cell_sum = sum([self.cell_val(row - 1, col),
                                self.cell_val(row - 1, col - 1),
                                self.cell_val(row, col - 1),
                                self.cell_val(row + 1, col - 1),
                                self.cell_val(row + 1, col),
                                self.cell_val(row + 1, col + 1),
                                self.cell_val(row, col + 1),
                                self.cell_val(row - 1, col + 1)])

    def cell_val(self, row, col):
        if row >= 0 and row < self.grid_height and col >= 0 and col < self.grid_width:
            return self.cells[row][col]
        return 0

    def draw(self):
        for row in range(0, self.grid_height):
            for col in range(0, self.grid_width):
                if self.cells[row][col] == 1:
                    square_coords = (row * self.cell_size, col * self.cell_size,
                                     row * self.cell_size, col * self.cell_size + 
                                     self.cell_size, row * self.cell_size + 
                                     self.cell_size, col * self.cell_size, 
                                     row * self.cell_size + self.cell_size, 
                                     col * self.cell_size + self.cell_size)
                    pyglet.graphics.draw_indexed(4, pyglet.gl.GL_TRIANGLES,
                    [0, 1, 2, 1, 2, 3], 
                    ('v2i', square_coords))