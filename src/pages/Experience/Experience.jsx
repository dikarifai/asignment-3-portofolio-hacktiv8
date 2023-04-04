import React from "react";
import CardContent from "../../component/cardContent/CardContent";
import "./Experience.css";
import { List } from "antd";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardContent title="Experience">
        <List>
          <List.Item>
            <List.Item.Meta
              title="Frontend Developer Intern"
              description="PT.Media Kreasi Abadi/Ohome (2022)"
            />
          </List.Item>
          <List.Item>
            <ul>
              <li>
                Mampu memahami dasar‑dasar frontend developer seperti HTML, CSS,
                HTTP Protocol, Javascript, Penggunaan Version Control (Git),
                Package Manager, Build Tools, Layouting, REST API, dan
                lain‑lain.
              </li>
              <li>
                Mampu membangun aplikasi berbasis web dengan teknologi React (
                Typescript) dan tentang dasar Javascript, dasar React, dan juga
                dasar Typescript.
              </li>
              <li>
                Mampu mengimplementasikan nilai‑nilai kerjasama dalam
                tim/kelompok.
              </li>
              <li>
                Mampu mempublikasikan Aplikasi Web yang dibuat atau yang
                dibangun agar dapat digunakan secara Publik.
              </li>
              <li>
                Mampu melakukan uji coba Unit test , End to end test, dan
                Component atau UI Test untuk aplikasi berbasis web.
              </li>
              <li>Mampu beradaptasi dengan lingkungan dan rekan baru.</li>
              <li>
                Mampu membuat project Bersama tim sesuai yang telah ditentukan
              </li>
            </ul>
          </List.Item>
        </List>
      </CardContent>
    );
  }
}

export default Experience;
