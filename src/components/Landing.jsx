import React from 'react'
import Header from './Header'
import Card from './Card'
import TodoContainer from './TodoContainer'
import { useLocation } from 'react-router-dom'
function Landing() {
    const data = useLocation();


    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* header */}
                <Header name={data.state.user}></Header>
                {/* card */}
                <div className="flex justify-between gap-7 my-5  flex-wrap ">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"}></Card>
                    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:10:20"}></Card>
                    <Card bgcolor={"#FDA201"} title={"Built Using"} subtitle={"React"}></Card>
                </div>
                {/* todocontainer */}
                <TodoContainer></TodoContainer>

            </div>
        </div>
    )
}

export default Landing
