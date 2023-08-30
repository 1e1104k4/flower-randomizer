"use client"
import Image from 'next/image'
import React from "react";
import {set} from "zod";

const flowersByColor: Record<string, string>={
    blue: "/flowers/blue.jpg",
    red: "/flowers/red.jpeg"
}

export default function Home() {
    const [colors, setColor] = React.useState<string[]>([])
        console.log(`current color is ${colors}`)
    console.log(colors)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button>randomizer</button>
        <div>{colors}</div>
        {colors && <img src={flowersByColor[colors[0]]}/>}

        {/*<img src="/flowers/blue.jpg" />*/}
        <button className="px-6 py-3 rounded bg-red-500 text-white" onClick={()=>setColor([...colors, "red"])}>red</button>
        <button className="px-6 py-3 rounded bg-blue-500 text-white" onClick={()=>setColor([...colors, "blue"])}>blue</button>




        <fieldset>
            <legend>color:</legend>

            <div>
                <input type="checkbox" id="red" name="red" />
                <label htmlFor="red">red</label>
            </div>

            <div>
                <input type="checkbox" id="blue" name="blue" />
                <label htmlFor="blue">blue</label>
            </div>
        </fieldset>


        <fieldset>
            <legend>color:</legend>
            <div>
                <input type="radio" id="red3" name="color" value="red3" />
                <label htmlFor="red3">RED</label>
            </div>
            <div>
                <input type="radio" id="blue3" name="color" value="blue3" />
                <label htmlFor="blue3">BLUE</label>
            </div>
        </fieldset>
    </main>
  )
}
