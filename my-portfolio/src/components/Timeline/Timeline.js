import './Timeline.css';
import React from 'react';
import Line from '../../assets/images/Vector 1.svg';
import Stem from '../../assets/images/stem.svg';
import SmallLeft from '../../assets/images/small-left.svg';
import SmallRight from '../../assets/images/small-right.svg';
import MedLeft from '../../assets/images/med-left.svg';
import MedRight from '../../assets/images/med-right.svg';
import LargeLeft from '../../assets/images/large-left.svg';
import LargeRight from '../../assets/images/large-right.svg';
import LongLine from '../../assets/images/line.png';

const leaves = [SmallLeft, SmallRight, MedLeft, MedRight, LargeLeft, LargeRight];

class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
    }

    createLeaves() {
        const objects = this.props.data;
        const Majors = objects.filter(object => object["Major/Minor"] === "Major");
        const listItems = [];
        let repeat = 0;
        for (let i = 0; i < Majors.length; i++) {
          let object = Majors[i];
          let month = object["Start Month"];
          let year = object["Start Year"];
          let date = month.slice(0, 3) + ". " + year;

          let after = "";
          if (i !== Majors.length - 1) {
            let object2 = Majors[i + 1];
            let month2 = object2["Start Month"];
            let year2 = object2["Start Year"];
            after = month2.slice(0, 3) + ". " + year2;
          }
          

          if (date === after) {
            repeat++;
          } else {
            repeat = 0;
          }
          let month_class = "month";
          if (repeat > 0) {
            month_class += " display";
          }
          let stem_key = "stem" + String(i);
          let class_name1 = "group";
          let class_name2 = "group";
          
          let source = undefined;
          let array = [];

          if (object["Leaf"] === "Small") {
            array = [0, 1];
          } else if (object["Leaf"] === "Large") {
            array = [4, 5];
          } else if (object["Leaf"] === "Med"){
            array = [2, 3];
          }

          if (i % 2 == 0) {
            class_name1 += " left-leaf";
            class_name2 += " left-leaf";
            class_name2 += " visible";
            source = leaves[array[0]];
          } else {
            class_name1 += " right-leaf";
            class_name2 += " right-leaf";
            class_name1 += " visible";
            source = leaves[array[1]];
          }
          let leaf_key = String(source) + String(i);
          if (object["Leaf"] === "Line") {
            source = LongLine;
          }
          listItems[i] = 
          (
            <div className={"row"} style={{flexGrow: object["Grow"]}}>
              <div className={"event"} key={i} >
                <div className={class_name1}>
                  <div className="leaf">
                    <img key={leaf_key} src={source}/>
                    <span className={"title"}>{object["Event Name"]}</span>
                  </div>
                  <img key={stem_key} src={Stem}/>
                </div>
                <div className={month_class} key={date}>{date}</div>
                <div className={class_name2}>
                  <img key={leaf_key} src={source}/>
                  <img key={stem_key} src={Stem}/>
                </div>
              </div>
            </div>
            
          )
        }
        return listItems;
      }
    
    render() {
        
        return (
            <div>
                <div className='vector1'><img key={"line"} src={Line}/></div>
                <div className='timeline'>{this.createLeaves()}</div>
            </div>
        );
    }
}

export default Timeline;

// if the function uses this then there is no "static" 
// you call the function like so: this.[function name]

// if the function does not use this, use static
// you call the function like so: [class name].[function name]