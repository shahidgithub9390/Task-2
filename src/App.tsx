import React, { useState } from 'react';

const InlineCssExample = () => {
  const [color, setColor] = useState('blue');
  const [fontSize, setFontSize] = useState('16px');
  const [fontWeight, setFontWeight] = useState('normal');
  const [textAlign, setTextAlign] = useState('left');
  const [textDecoration, setTextDecoration] = useState('none');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [border, setBorder] = useState('none');
  const [borderRadius, setBorderRadius] = useState('0px');
  const [padding, setPadding] = useState('0px');
  const [margin, setMargin] = useState('0px');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inline CSS Styling</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Font Size</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            <option value="16px">16px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Font Weight</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={fontWeight} onChange={(e) => setFontWeight(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="italic">Italic</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Text Align</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={textAlign} onChange={(e) => setTextAlign(e.target.value)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Text Decoration</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={textDecoration} onChange={(e) => setTextDecoration(e.target.value)}>
            <option value="none">None</option>
            <option value="underline">Underline</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line Through</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Background Color</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)}>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            <option value="black">Black</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Border</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={border} onChange={(e) => setBorder(e.target.value)}>
            <option value="none">None</option>
            <option value="solid 1px black">Solid 1px Black</option>
            <option value="dashed 1px black">Dashed 1px Black</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Border Radius</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)}>
            <option value="0px">0px</option>
            <option value="5px">5px</option>
            <option value="10px">10px</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Padding</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={padding} onChange={(e) => setPadding(e.target.value)}>
            <option value="0px">0px</option>
            <option value="5px">5px</option>
            <option value="10px">10px</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Margin</label>
          <select className="mt-1 block w-full pl-3 py-2 text-base border border-gray-300 rounded-md" value={margin} onChange={(e) => setMargin(e.target.value)}>
            <option value="0px">0px</option>
            <option value="5px">5px</option>
            <option value="10px">10px</option>
          </select>
        </div>
      </div>
      <div style={{
        color,
        fontSize,
        fontWeight,
        textAlign,
        textDecoration,
        backgroundColor,
        border,
        borderRadius,
        padding,
        margin
      }}>
        This is a sample text to demonstrate inline CSS styling.
      </div>
    </div>
  );
};

export default InlineCssExample;