import React,{useState} from "react";

function AdminCard(props) {

  
    function handleClick() {
        // props.onDelete(props.id);
        
        // console.log("title");
        // console.log(props.title);

        // setDeletenote(() => {
        //   return {
        //     title:props.title,
        //     content:props.content,
        //     amount:props.amount
        //   };
        // })
        

       let delnote={
          title:props.title,
          content:props.content,
          amount:props.amount
        }

        // console.log("deleted note");
        // console.log(delnote);

        props.onDelete(delnote);
      }

      // console.log("deleted note outside");
      //   console.log(deletenote);


  
    return (
    <div>
      <div id="campaigns" className="twocolor-campaign campaign-content">
       
        <img
          className="campaign-img"
          src={require("../images/about-img.jpg").default}
          alt="logo"
        />

        <div>
          <div className="campaign-info">
          <h3>
            <b>{props.title}</b>
          </h3>

          <h6>
            {props.content}
          </h6>

          </div>

          <div className="campaign-content ">
            <div className="campaign-amount">
              <b>REQUIRED AMOUNT:Rs.{props.amount}</b>
              
            </div>

            <button
              type="button"
              class="btn btn-success btn-lg"
              
              onClick={handleClick}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
