import React from "react";

function JSXExample(){

    const greeting = <h1> Hello, React with JSX!!!!!!!</h1>;
    const name = 'ตวง';
    const age = 80;

    const currentyear = new Date().getFullYear();

    const user = {
        firstName: 'วรรัตน์',
        lastName: 'หลักฐาน',
        age: 20,
        hobbies: ['แบดมินตัน','นอน']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };
    const isLoggedin = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples"> 
            <h1>JSX Example</h1>
            <section>
                <h1>การแสดงข้อมูล</h1>
                (greeting)
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>นี้คือปี {currentyear} </p>
                <p>ชือจริง {formatName(user)}</p>
            </section>

            <section>
                <h2>Attributes ใน JSX</h2>
                <div className ="card">
                    <p className="text-primary">ใช้ className แทน class</p>
                </div>
                <button>
                    onClciks={() => alert('Button Clicked')}
                    onMouseEnter={() => console.log('Mouse Entered!')}

                    Hover me or Click me!
                </button>

                <div style= {{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRaius: '8px',
                    margintop: '10px'
                }}>
                    <p style= {{color: '#2D4A2B', fontWeight: 'bold'}}>
                        Inline style ใช้ object
                    </p>
                </div>
            </section>
            <section>
                <h2>Conditional Rendering</h2>
            </section>
        </div>
    )
}
export default JSXExample;