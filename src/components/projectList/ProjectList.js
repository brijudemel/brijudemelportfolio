import React from 'react'
import './projectList.css'
import Project from "../project/Project";
import { projects } from "../../data";
import { ListItem } from '@mui/material';

function ProjectList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Lama</h1>
                <p className="pl-desc">
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
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
