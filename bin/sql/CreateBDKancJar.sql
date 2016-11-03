
CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `CaseID` int(11) DEFAULT NULL,
  `ContactID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `cases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Struktura tabeli dla tabeli `cases`
--

CREATE TABLE `cases` (
  `id` int(11) NOT NULL,
  `AutoSing` varchar(100) NOT NULL,
  `ManualSing` varchar(300) NOT NULL,
  `Value` decimal(10,0) NOT NULL,
  `Registration` date NOT NULL,
  `Comment` varchar(255) NOT NULL,
  `OfficeID` int(11) NOT NULL,
  `TypeCaseID` int(11) NOT NULL,
  `AssignedID` int(11) NOT NULL,
  `LocationActID` int(11) NOT NULL,
  `StatusID` int(11) NOT NULL,
  `MainLawyerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

ALTER TABLE `cases`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `cases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `ShortCompany` varchar(100) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `Company` varchar(400) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `IsCompany` tinyint(1) NOT NULL DEFAULT '0',
  `FirstName` varchar(100) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `Surname` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `Workplace` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL COMMENT 'Stanowisko',
  `NIP` int(11) NOT NULL,
  `PESEL` int(11) NOT NULL,
  `KRS` int(11) NOT NULL,
  `REGON` int(11) NOT NULL,
  `TypeCompanyID` int(11) NOT NULL,
  `IsClient` tinyint(1) NOT NULL DEFAULT '0',
  `IsAssociate` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci COMMENT='Kontakty';

ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;


INSERT INTO `cases` (`id`, `AutoSing`, `ManualSing`, `Value`, `Registration`, `Comment`, `OfficeID`, `TypeCaseID`, `AssignedID`, `LocationActID`, `StatusID`, `MainLawyerID`) VALUES
(1, '01/2015/Jarek,', 'N0U-8P5/222; CDAA-1233/2012; 2133-432-122', '26690', '2016-02-17', 'Prosty opis sprawy nr 1 dsds', 1, 1, 1, 4, 1, 0),
(2, '02/2015/Jarek,', 'X3Z-9N5/039; CFA/2012-122; 1211-2211; 12/AS12/1112', '20127', '2015-12-15', 'Prosty opis sprawy nr 2', 2, 2, 1, 4, 1, 1),
(3, '01/2015/Nowak,', 'H9H-9P3/284; DSA-122-1122; 212S/211/223', '69627', '2016-02-02', 'Prosty opis sprawy nr 3', 3, 3, 2, 1, 2, 1),
(4, '01/2016/J&N,', 'W5E-2I2/133; 21M23/322/112/22', '135000', '2016-02-09', 'Prosty opis sprawy nr 4', 3, 1, 1, 1, 3, 1);


INSERT INTO `contacts` (`id`, `ShortCompany`, `Company`, `IsCompany`, `FirstName`, `Surname`, `Workplace`, `NIP`, `PESEL`, `KRS`, `REGON`, `TypeCompanyID`, `IsClient`, `IsAssociate`) VALUES
(1, 'Tristique', 'Tristique Pharetra Ltd', 0, 'Sławomir', 'Cantu', 'Research and Development', 2147483647, 2147483647, 2147483647, 2147483647, 8, 1, 0),
(2, 'Non Ltd', '', 1, 'Howard', 'Rice', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 12, 0, 0),
(3, 'Sollicitudin A Limited', '', 1, 'Geraldine', 'Rosario', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 16, 0, 0),
(4, 'Sagittis Augue Incorporated', '', 1, 'Sharon', 'Downs', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 7, 0, 0),
(5, 'Velit Sed Malesuada Limited', '', 1, 'Raya', 'Barrett', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 1, 0, 0),
(6, 'Feugiat Placerat Industries', '', 1, 'Sean', 'Fox', 'Sales and Marketing', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(7, 'Interdum Nunc Limited', '', 0, 'Hanna', 'Hines', 'Legal Department', 2147483647, 2147483647, 2147483647, 2147483647, 13, 0, 0),
(8, 'Dis Parturient Montes Company', '', 0, 'Hunter', 'Daniels', 'Asset Management', 2147483647, 2147483647, 2147483647, 2147483647, 16, 0, 0),
(9, 'Commodo Foundation', '', 0, 'Alan', 'Huber', 'Public Relations', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(10, 'Non Hendrerit Associates', '', 0, 'Gemma', 'Cooke', 'Payroll', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(11, 'Sit Corporation', '', 1, 'Shay', 'Cooke', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(12, 'Lectus Ante Incorporated', '', 1, 'Deanna', 'Campbell', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 14, 0, 0),
(13, 'Lobortis Industries', '', 1, 'Mufutau', 'Owens', 'Research and Development', 2147483647, 2147483647, 2147483647, 2147483647, 2, 0, 0),
(14, 'Amet Orci Ut Company', '', 1, 'Cole', 'Dorsey', 'Payroll', 2147483647, 2147483647, 2147483647, 2147483647, 1, 0, 0),
(15, 'Non Luctus Sit Associates', '', 1, 'Wynne', 'Hill', 'Media Relations', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(16, 'Euismod Urna Incorporated', '', 0, 'Serena', 'Saunders', 'Asset Management', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(17, 'Tempor Ltd', '', 1, 'Plato', 'Burton', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 13, 0, 0),
(18, 'Laoreet Inc.', '', 0, 'Sonia', 'Bentley', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 11, 0, 0),
(19, 'Sociis Natoque Penatibus Limited', '', 1, 'Jessamine', 'Martin', 'Legal Department', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(20, 'Curabitur LLP', '', 0, 'Wylie', 'Holcomb', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 14, 0, 0),
(21, 'Turpis Nulla Aliquet LLP', '', 0, 'Doris', 'Collier', 'Public Relations', 2147483647, 2147483647, 2147483647, 2147483647, 3, 0, 0),
(22, 'Lorem Ac Risus LLP', '', 1, 'Rafael', 'Mcmillan', 'Research and Development', 2147483647, 2147483647, 2147483647, 2147483647, 11, 0, 0),
(23, 'Sociis Natoque Penatibus Ltd', '', 1, 'Quinn', 'Singleton', 'Public Relations', 2147483647, 2147483647, 2147483647, 2147483647, 5, 0, 0),
(24, 'Magna Et Ipsum PC', '', 1, 'Galvin', 'Daugherty', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 16, 0, 0),
(25, 'Ante Nunc Inc.', '', 1, 'Keelie', 'Collier', 'Human Resources', 2147483647, 2147483647, 929619399, 2147483647, 5, 0, 0),
(26, 'Ac Mi Consulting', '', 0, 'Montana', 'Dickerson', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 2, 0, 0),
(27, 'Tincidunt Industries', '', 0, 'Sean', 'Owens', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 3, 0, 0),
(28, 'Ipsum Associates', '', 0, 'Quinlan', 'Maldonado', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(29, 'Mauris Ut Quam LLC', '', 0, 'Linus', 'Peck', 'Human Resources', 2147483647, 2147483647, 2147483647, 2147483647, 15, 0, 0),
(30, 'Vestibulum Accumsan Ltd', '', 1, 'Jael', 'Benjamin', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(31, 'Donec Corporation', '', 0, 'Celeste', 'Hughes', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 7, 0, 0),
(32, 'Enim Institute', '', 1, 'Hamish', 'Pacheco', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 16, 0, 0),
(33, 'Cursus Company', '', 1, 'Dennis', 'Stephens', 'Human Resources', 2147483647, 2147483647, 2147483647, 2147483647, 1, 0, 0),
(34, 'Rhoncus Donec Est Corporation', '', 1, 'Briar', 'Schwartz', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 9, 0, 0),
(35, 'Ad Industries', '', 1, 'Shelley', 'Flores', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 6, 0, 0),
(36, 'Quisque Varius Nam Company', '', 0, 'Rajah', 'Mcfadden', 'Asset Management', 2147483647, 2147483647, 2147483647, 2147483647, 12, 0, 0),
(37, 'Nibh Enim Institute', '', 1, 'Hakeem', 'Franklin', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 14, 0, 0),
(38, 'Leo Cras Vehicula LLC', '', 0, 'Grant', 'Rose', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 14, 0, 0),
(39, 'Massa Mauris Vestibulum Foundation', '', 1, 'Dane', 'Gibson', 'Sales and Marketing', 2147483647, 2147483647, 2147483647, 2147483647, 11, 0, 0),
(40, 'Vehicula Company', '', 1, 'Daniel', 'Waller', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 7, 0, 0),
(41, 'Cras Eu Tellus Corporation', '', 1, 'Riley', 'Juarez', 'Research and Development', 2147483647, 2147483647, 2147483647, 2147483647, 5, 0, 0),
(42, 'Adipiscing Elit PC', '', 1, 'Benedict', 'Willis', 'Media Relations', 2147483647, 2147483647, 2147483647, 2147483647, 3, 0, 0),
(43, 'Donec Luctus Aliquet Industries', '', 0, 'Jacqueline', 'Mosley', 'Research and Development', 2147483647, 2147483647, 2147483647, 2147483647, 15, 0, 0),
(44, 'Amet Corp.', '', 0, 'Owen', 'Reid', 'Human Resources', 2147483647, 2147483647, 2147483647, 2147483647, 7, 0, 0),
(45, 'Aliquet Phasellus Fermentum LLP', '', 0, 'Jin', 'Leonard', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(46, 'Euismod Ac Consulting', '', 0, 'Ryan', 'Cummings', 'Asset Management', 2147483647, 2147483647, 876820199, 2147483647, 1, 0, 0),
(47, 'Vel Foundation', '', 1, 'Mechelle', 'Coffey', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 6, 0, 0),
(48, 'Molestie PC', '', 1, 'Nell', 'Schultz', 'Media Relations', 2147483647, 2147483647, 2147483647, 2147483647, 3, 0, 0),
(49, 'Lacus Nulla Inc.', '', 1, 'Macey', 'Farrell', 'Media Relations', 2147483647, 2147483647, 2147483647, 2147483647, 6, 0, 0),
(50, 'Vitae Risus Corp.', '', 0, 'Ulric', 'Caldwell', 'Asset Management', 2147483647, 2147483647, 2147483647, 2147483647, 6, 0, 0),
(51, 'Et Ultrices Posuere LLP', '', 0, 'Baxter', 'Hansen', 'Tech Support', 2147483647, 2147483647, 2147483647, 2147483647, 14, 0, 0),
(52, 'Erat Vivamus Limited', '', 1, 'Daphne', 'Foster', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 14, 0, 0),
(53, 'Elit Dictum Eu Company', '', 0, 'Kaden', 'House', 'Finances', 2147483647, 2147483647, 2147483647, 568779299, 8, 0, 0),
(54, 'Ipsum Phasellus LLC', '', 1, 'Michelle', 'Bowman', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 15, 0, 0),
(55, 'Dui Ltd', '', 0, 'Jack', 'Brady', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 9, 0, 0),
(56, 'Tellus Eu LLC', '', 0, 'Kai', 'Bradshaw', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 15, 0, 0),
(57, 'Tincidunt PC', '', 0, 'Rowan', 'Berry', 'Accounting', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(58, 'Vel Mauris Integer Inc.', '', 1, 'Kelsie', 'Rocha', 'Payroll', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(59, 'Cras Limited', '', 0, 'Brady', 'Macdonald', 'Asset Management', 2147483647, 2147483647, 2147483647, 2147483647, 2, 0, 0),
(60, 'Quam A Limited', '', 0, 'Kylee', 'Salinas', 'Public Relations', 2147483647, 2147483647, 2147483647, 2147483647, 8, 0, 0),
(61, 'Fringilla Est Inc.', '', 0, 'Madaline', 'Newton', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 2, 0, 0),
(62, 'Nec Tempus Scelerisque Limited', '', 1, 'Adara', 'Bean', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 11, 0, 0),
(63, 'Praesent Eu Company', '', 0, 'Garrett', 'Simpson', 'Tech Support', 2147483647, 2147483647, 2147483647, 2147483647, 16, 0, 0),
(64, 'Nullam Consulting', '', 1, 'Randall', 'Crosby', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 13, 0, 0),
(65, 'Elit PC', '', 0, 'Chaney', 'Cardenas', 'Research and Development', 2147483647, 2147483647, 2147483647, 2147483647, 14, 0, 0),
(66, 'Tempor Inc.', '', 0, 'Tate', 'Perkins', 'Tech Support', 2147483647, 2147483647, 2147483647, 2147483647, 7, 0, 0),
(67, 'Ipsum Sodales Purus LLP', '', 1, 'Vera', 'Leonard', 'Public Relations', 2147483647, 2147483647, 2147483647, 2147483647, 8, 0, 0),
(68, 'Sed Corporation', '', 0, 'Lynn', 'Ochoa', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 8, 0, 0),
(69, 'Vitae Risus Duis Consulting', '', 1, 'Micah', 'Bell', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 13, 0, 0),
(70, 'Commodo Consulting', '', 0, 'Lucius', 'Vazquez', 'Research and Development', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(71, 'A Aliquet Vel Foundation', '', 1, 'Nathaniel', 'Flowers', 'Accounting', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(72, 'Ultrices Sit Ltd', '', 0, 'Kerry', 'Lee', 'Legal Department', 2147483647, 2147483647, 2147483647, 2147483647, 5, 0, 0),
(73, 'Ut Mi Duis Incorporated', '', 1, 'Baker', 'Dunlap', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(74, 'Integer Corp.', '', 1, 'Drake', 'Duffy', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 4, 0, 0),
(75, 'Phasellus Dolor Elit LLP', '', 1, 'Madonna', 'Hopper', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(76, 'Proin Mi Company', '', 0, 'Quentin', 'Cox', 'Public Relations', 2147483647, 2147483647, 2147483647, 2147483647, 11, 0, 0),
(77, 'Praesent Eu Corp.', '', 1, 'Nelle', 'Avila', 'Asset Management', 2147483647, 2147483647, 2147483647, 2147483647, 13, 0, 0),
(78, 'Cum Sociis Natoque Institute', '', 1, 'Ryan', 'Key', 'Asset Management', 2147483647, 2147483647, 2147483647, 2147483647, 6, 0, 0),
(79, 'At Velit Pellentesque Corporation', '', 0, 'Paula', 'Parsons', 'Sales and Marketing', 2147483647, 2147483647, 2147483647, 2147483647, 3, 0, 0),
(80, 'Et Netus Et Consulting', '', 0, 'Maxwell', 'Singleton', 'Quality Assurance', 2147483647, 2147483647, 2147483647, 2147483647, 12, 0, 0),
(81, 'Eu Placerat Eget Associates', '', 0, 'Adena', 'Garrett', 'Customer Relations', 2147483647, 2147483647, 2147483647, 2147483647, 15, 0, 0),
(82, 'Posuere PC', '', 1, 'Briar', 'Craig', 'Tech Support', 2147483647, 2147483647, 2147483647, 2147483647, 2, 0, 0),
(83, 'Magna Lorem Ipsum Consulting', '', 0, 'Austin', 'Noble', 'Sales and Marketing', 2147483647, 2147483647, 2147483647, 2147483647, 7, 0, 0),
(84, 'Nascetur Ridiculus LLC', '', 0, 'Hilary', 'Conley', 'Public Relations', 2147483647, 2147483647, 2147483647, 1485561699, 15, 0, 0),
(85, 'Nonummy Ipsum Corp.', '', 1, 'Caleb', 'Briggs', 'Advertising', 2147483647, 2147483647, 2147483647, 2147483647, 1, 0, 0),
(86, 'Ultrices A Limited', '', 1, 'Melodie', 'Merritt', 'Sales and Marketing', 2147483647, 2147483647, 2147483647, 2147483647, 15, 0, 0),
(87, 'Vel Corporation', '', 0, 'Geraldine', 'Glass', 'Legal Department', 2147483647, 2147483647, 2147483647, 2147483647, 9, 0, 0),
(88, 'Tempus Associates', '', 0, 'Jacob', 'Cohen', 'Public Relations', 2147483647, 2147483647, 2147483647, 2147483647, 16, 0, 0),
(89, 'Maecenas Mi Felis LLC', '', 1, 'Roary', 'Hopper', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 9, 0, 0),
(90, 'Tempor Lorem Ltd', '', 0, 'Howard', 'Hernandez', 'Payroll', 2147483647, 2147483647, 2147483647, 2147483647, 12, 0, 0),
(91, 'Velit Egestas Industries', '', 1, 'Idona', 'Curtis', 'Finances', 2147483647, 2147483647, 2147483647, 2147483647, 5, 0, 0),
(92, 'Ipsum Primis PC', '', 0, 'Elizabeth', 'Bartlett', 'Accounting', 2147483647, 2147483647, 2147483647, 2147483647, 15, 0, 0),
(93, 'Arcu LLC', '', 0, 'Kessie', 'Kirby', 'Media Relations', 2147483647, 2147483647, 1486795799, 2147483647, 15, 0, 0),
(94, 'Ut Odio Vel Inc.', '', 1, 'Lesley', 'Dodson', 'Media Relations', 2147483647, 2147483647, 2147483647, 2147483647, 13, 0, 0),
(95, 'Eget Corp.', '', 0, 'Kiona', 'Kemp', 'Customer Relations', 2147483647, 2147483647, 2147483647, 538849699, 12, 0, 0),
(96, 'Consectetuer Cursus Et Foundation', '', 0, 'Cheyenne', 'Graham', 'Payroll', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(97, 'Orci Foundation', '', 0, 'Odessa', 'Leonard', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 10, 0, 0),
(98, 'Nisi Consulting', '', 1, 'Lois', 'Rios', 'Accounting', 2147483647, 2147483647, 2147483647, 2147483647, 16, 0, 0),
(99, 'Eros Proin PC', '', 1, 'Tad', 'Emerson', 'Tech Support', 2147483647, 2147483647, 2147483647, 2147483647, 6, 0, 0),
(100, 'Ipsum Dolor Sit Associates', '', 1, 'Wade', 'Hutchinson', 'Customer Service', 2147483647, 2147483647, 2147483647, 2147483647, 1, 0, 0);


NSERT INTO `clients` (`CaseID`, `ContactID`) VALUES
(1, 42),
(2, 34),
(3, 93),
(2, 47),
(2, 20),
(1, 15),
(4, 53),
(4, 75),
(1, 100),
(4, 75),
(3, 58),
(3, 74),
(3, 2),
(2, 6),
(1, 54),
(2, 84),
(3, 99),
(2, 2),
(2, 77),
(4, 70),
(3, 58),
(4, 51),
(2, 100),
(2, 50),
(2, 4),
(3, 15),
(2, 86),
(2, 66),
(2, 58),
(4, 93),
(4, 9),
(4, 87),
(4, 92),
(2, 39),
(1, 84),
(3, 57),
(2, 92),
(2, 11),
(3, 53),
(1, 22),
(4, 33),
(4, 98),
(2, 19),
(2, 62),
(2, 42),
(2, 64),
(3, 15),
(1, 5),
(3, 40),
(4, 2),
(1, 57),
(4, 68),
(1, 48),
(4, 85),
(4, 39),
(3, 34),
(3, 61),
(3, 14),
(1, 52),
(3, 68),
(3, 77),
(4, 29),
(4, 19),
(2, 11),
(1, 60),
(1, 64),
(4, 42),
(2, 76),
(1, 78),
(4, 46),
(4, 83),
(4, 37),
(2, 14),
(3, 89),
(4, 86),
(1, 44),
(1, 45),
(3, 33),
(4, 50),
(1, 46),
(2, 53),
(1, 56),
(1, 95),
(2, 72),
(4, 27),
(4, 99),
(3, 90),
(1, 87),
(2, 47),
(2, 7),
(4, 88),
(2, 96),
(3, 66),
(3, 100),
(4, 21),
(2, 60),
(2, 44),
(1, 24),
(2, 24),
(2, 31);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `cases`
--/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  Admin
 * Created: 2016-10-01
 */

