import React from 'react'

export default function ImperativeProgramming() {
  const container = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = 'Hello, Imperative Programming!';
  container.appendChild(header);
  document.body.appendChild(container);
}
