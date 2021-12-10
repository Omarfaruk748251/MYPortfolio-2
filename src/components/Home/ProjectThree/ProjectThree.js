import React from 'react';
import img1 from '../../../images/s8.png';
import img2 from '../../../images/s9.png';
import img3 from '../../../images/s10.png';
import ProjectThreeDetails from '../ProjectThreeDetails/ProjectThreeDetails';


const data = [
    {
        id: "1",
        title: "Optimization",
        desc: "Here you can customize your MAC as you want. There are some options which make you comfortable to make a proper MAC",
        img: img1
    },
    {
        id: "2",
        title: "In case mind change",
        desc: "Sometimes when you are confused about what should you buy. whats, why give you chance to change your product",
        img: img2
    },
    {
        id: "3",
        title: "TOTAL AMOUNT",
        desc: "You can check what is your total amount",
        img: img3
    }
]

const ProjectThree = () => {
    return (
        <>
            <div class="row row-cols-1 row-cols-md-3 g-4 my-4">
                {
                    data.map(d => <ProjectThreeDetails data={d}></ProjectThreeDetails>)
                }
            </div>
            <div className="text-center">
                <a style={{ marginRight: "10px", fontWeight: "bold" }} target="_blank" href="https://34th-mac-book-pro-assignment.netlify.app/">Live-Site</a>
                <a style={{ marginRight: "10px", fontWeight: "bold" }} target="_blank" href="https://github.com/Omarfaruk748251/mac-book-pro">Github-code</a>

            </div>
        </>
    );
};

export default ProjectThree;