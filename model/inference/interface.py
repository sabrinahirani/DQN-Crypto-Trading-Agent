import gradio as gr

import matplotlib.pyplot as plt
import numpy as np

# gradio interface
with gr.Blocks() as demo:

    x = np.linspace(0, 10, 100)
    y = np.sin(x)
    plt.plot(x, y)
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')
    plt.title('Sample Plot')
    plt.grid(True)

    # title
    gr.HTML("""<h1 align="center">LSTM/RL Cryptocurrency Algorithmic Trading Strategy 🤖</h1>""")
        
    # graph
    gr.Plot(value=plt, label="plot")
        
    # input
    with gr.Row():
        gr.Textbox(label="Initial Portfolio Value")
        gr.Textbox(label="Duration (in days)")

demo.launch()