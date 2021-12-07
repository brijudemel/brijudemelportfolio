import React from 'react'
import './projectList.css'
import Project from "../project/Project";
import { projects } from "../../data";
import { ListItem } from '@mui/material';

function ProjectList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Here comes interesting stuffs</h1>
                <p className="pl-desc">
                    A few of my projects of different technologies with source code. Check it out!!
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                <Project key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc} githublink={item.githublink} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList
