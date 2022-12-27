import { async } from "@firebase/util";
import { dbService } from "./fBase";
import React from "react";
import {useState} from 'react';  

const Nweet = ({nweetObj,isOwner})=>{
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick= async()=>{
        const ok=window.confirm("Are you sure you want to delete this nweet?");
        console.log(ok);
        if(ok){
            //delete nweet
            await dbService.doc(`nweets/&{nweetObj.id}`).delete();
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.doc(`nweets/${nweetObj.id}`).update({
        text: newNweet,
      });
      setEditing(false);
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setNewNweet(value);
    };
    return (
      <div className="nweet">
        {editing ? (
          <>
            <form onSubmit={onSubmit} className="container nweetEdit">
              <input
                type="text"
                placeholder="Edit your nweet"
                value={newNweet}
                required
                autoFocus
                onChange={onChange}
                className="formInput"
              />
              <input type="submit" value="Update Nweet" className="formBtn" />
            </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
              Cancel
            </span>
          </>
        ) : (
          <>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
              <div class="nweet__actions">
                <span onClick={onDeleteClick}>
                </span>
                <span onClick={toggleEditing}>
                </span>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

export default Nweet;