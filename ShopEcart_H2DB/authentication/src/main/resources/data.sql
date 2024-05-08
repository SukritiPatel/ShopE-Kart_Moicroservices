INSERT INTO `user` VALUES
('admin123','admin','admin','$2a$10$iIml7FA54Ikdm9JxA8JG9e66c5lODraLWWCrCLPct6Ofu/a7z8pdC','1234567890','admin@gmail.com'),
('shalini123','Shalini','Kumari','$2a$10$G36rJhXUFFOePnFaG4zI4uLrfUlJHW9zOgw4LNuJzmABfW1ppupK6','9876543211','shalini@gmail.com');

INSERT INTO `role` VALUES ('Admin','Admin role'),('User','Default role for newly created record');

INSERT INTO `user_role` VALUES ('admin123','Admin'),('shalini123','User');