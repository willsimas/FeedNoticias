import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Willian Simas"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa voluptas saepe ipsa cupiditate! Id, totam maiores, ipsam iure expedita nemo modi fugit facilis ad natus repudiandae ducimus reprehenderit eligendi."
            /> 
          <Post 
            author="Jhon Sutter"
            content="Something new!"
          />
          
        </main>
      </div>
    </div>
  )
}

