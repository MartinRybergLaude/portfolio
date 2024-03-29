import React, { useEffect } from 'react'
import styles from "./Case.module.scss"
import screen2 from "assets/screenshots/quantum/quantum.png"
import screen1 from "assets/screenshots/quantum/quantum2.png"
import astar from "assets/screenshots/quantum/quantum.gif"
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function CaseSolskenWeb() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <article className={styles.page}>
      <Helmet>
        <meta name="theme-color" content="#ffffff"/>
      </Helmet>
      <header>
        <h1>Quantum Snake</h1>
        <p>Quantum Snake is an 80's themed snake game, with an enemy snake built to always find the fastest path to the apple. The enemy snake is utilizing a sophisticated A-star-inspired pathfinding algorithm ensuring the snake always beats the player, provided he is closer to the apple as it appears.</p>
        <div className={styles.info}>
          <div>
            <p><span>Github:</span> <a href="https://github.com/MartinRybergLaude/QuantumSnakeConsole">C# Version</a></p>
            <p><span>Role:</span> Android, Game Engine, .NET</p>
            <p><span>Client:</span> Me</p>
          </div>
          <p className={styles.date}>2018</p>
        </div>
      </header>
      <section className={styles.section}>
        <h2>Aim</h2>
        <p>This project was very different from what I usually do. I felt like I wanted to make a snake game for android, with a challenging enemy snake powered by some kind of pathfinding algorithm. This would mean more low-level type of programming to what I'm used to but I figured it'd be fun and giving.</p>
        <p>The goal of the project was therefore to gain experience and test the waters with a different kind of programming I'm used to, while still making something functional and complete. That includes a regular single player snake game, and a vs-cpu mode against an algorithm.</p>
      </section>
      <section className={styles.section}>
        <h2>Method</h2>
        <p>The workflow of this project was purely my own and admittedly quite loosely followed as I regarded this like a hobby thing that would not see release. The structure was more divided in different development areas rather than planning, UI and schedules etc. An overview of the flow was as follows:</p>
        <ul>
          <li>Building the graphics engine using surfaceview and related api's.</li>
          <li>Writing the core snake engine and implementing single player.</li>
          <li>Writing the enemy algorithm using A* pathfinding.</li>
          <li>Optimizations, optimizations, optimizations...</li>
          <li>Graphics assets, soundtrack and finishing touches.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Development</h2>
        <p>Development was carried out approximately according to the structure defined above. The by far most challenging part here was the A* algorithm implementation. The idea and pseudocode is fairly simple, but integrating it into a system requires a ton of thought and careful selection of data structures, for everything to play nice. The great thing about A* is however how quick it is for this purpose and how it can be adapted to better suit different situations by modifying the heuristic. I simply used the manhattan distance, but if the situation would've been different, there's the option to adapt. I reviewed most famous pathfinding algorithms and determined for these reasons the A* would suit this game most effectively.</p>
        <div className={styles.imgContainer}>
          <img loading="lazy" src={astar} alt="demo of a-star algorithm"/>
        </div>
        <p className={styles.imgDesc}>The C# console version of the game visualizing the pathfinding algorithm</p>
        <p>I did however hit major performance issues. Although one might think the algorithm is the bottleneck in a game like this, it turns out graphics was the main offender in this case. I did optimize the algorithm as well as I could, but the profiler doesn't lie. I researched this issue and found out my mistake was making a game in android studio using its APIs. They were not built for games and as a consequence don't handle games very nicely. I got perfomance to an acceptable level but it's clear I should've used something like libGDX for this kind of task. Lesson learned!</p>
      </section>
      <section className={styles.section}>
        <h2>Results</h2>
        <p>The resulting application contained all planned features, had a soundtrack and nice 80's-inspired graphics. It was not worth calling a finished product though, as performance was still sub-optimal and scaling for different devices was not supported. The goal of learning a lower level type of programming and diving into pathfinding algorithms was achieved however, so I would definitely not call this a complete failure. In fact, I ported it to a simple c# .NET console application, and without the graphical bottlenecks of surfaceview, it ran smooth as butter. The c# version can be found on github.</p>
        <div className={styles.imgContainer}>
          <div>
            <img loading="lazy" src={screen1} alt="screenshot of quantum snake"/>
          </div>
          <div>
            <img loading="lazy" src={screen2} alt="screenshot of quantum snake"/>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Discussion</h2>
        <p>Even though this never became a complete product, I learned so much during this project. Algorithms, engines, data structures, what works and what doesn't work, as well as making 80's graphics and soundtrack. In that way I'd call it a success. Most projects are, as long as you learn something useful.</p>
      </section>
    </article>
  )
}
