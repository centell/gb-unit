#!/usr/bin/env node

const args = process.argv.slice(2);
const price = args[0]

const gbUnit = () => {
  if(/^[0-9]*$/.exec(price) === null){
    console.log('usage: gb-unit [number]');
    return;
  }
  console.log(`${price/5000} GB`);
}

gbUnit();
