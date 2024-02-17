import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3Graph = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .append("svg")
      .attr("width", 400)
      .attr("height", 400)
      .style("border", "1px solid black");

    svg.append("circle")
      .attr("cx", 200)
      .attr("cy", 200)
      .attr("r", 100)
      .attr("fill", "red");
  }, []);

  return (
    <div ref={ref}></div>
  );
};

export default D3Graph;
