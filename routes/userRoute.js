const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const navigationController = require("../controllers/navigationController");
// const messageController = require("../controllers/messageController");

router.get("/user/:userid/home", navigationController.getHomeInfo);

// router.get("/user/:userid/", profileController.getProfile);

// router.get("/user/:userid/edit_profile", profileController.editProfilePage);

// router.get("/user/:userid/updateProfile", profileController.updateProfile);

// router.get("/user/:userid/like", profileController.addLike);

// router.get("/user/:userid/removeLike", profileController.removeLike);

router.get("/user/:userid/messages", navigationController.viewMessagesPage);

router.get(
  "/user/:userid/getMessageHistory/:recipientid",
  navigationController.getMessageHistory
);

// router.get("/user/:userid/messages/send", navigationController.sendMessages);

// router.get("/user/:userid/message", messageController.viewMessagePage);

// router.get("/user/:userid/message/send", messageController.sendMessage);

router.get("/user/:userid/posts", profileController.getAllPosts);

module.exports = router;