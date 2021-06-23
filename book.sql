CREATE TABLE `messages` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;