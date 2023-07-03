INSERT INTO emmaus_db.agency (name,location,lat,`long`,phone_number) VALUES
	 ('Emmaus Leognan Bourg','Leognan',44.729,-0.600536,"0556641890"),
	 ('Wild Code Emmaus','Paris',48.8689,2.40597,"0123763829"),
	 ('Emmaus Buffay','Nantes',47.2149,-1.55447,"0298785467"),
	 ('Emmaus Hautepierre','Strasbourg',48.5911,7.70885,"0398678567"),
	 ('Emmaus Capitole','Toulouse',43.603,1.44345,"0509786512"),
	 ('Emmaus Croix Blanche','Tarbes',43.2345,0.0742576,"0587678976"),
	 ('Emmaus Wazemmes','Lille',50.6263,3.0493,"0378986765"),
	 ('Emmaus Lutin Bleu','Laon',49.5674,3.62602,"0398678971"),
	 ('Emmaus Noailles','Marseille',43.2936,5.37828,"0409786534"),
	 ('Emmaus Recouvrance','Brest',48.3854,-4.49338,"0298675438"),
	 ('Emmaus Saint-Maclou','Rouen',49.4402,1.09809,"0209678954"),
	 ('Emmaus des Arcades','Dijon',47.3208,5.04262,"0387907483"),
	 ('Emmaus Guillotière','Lyon',45.7552,4.84274,"0486745301"),
	 ('Emmaus Tête D''or','Metz',49.1169,6.17824,"0386467897"),
	 ('Emmaus Comédie','Montpellier',43.6089,3.87889,"0478654345");



INSERT INTO emmaus_db.models (name,brand,release_year,picture) VALUES
	 ('Galaxy S11','Samsung',2020,'A'),
	 ('Huawei P30','Huawei',2019,'B'),
	 ('Galaxy A52','Samsung',2021,'C'),
	 ('Iphone 8','Apple',2017,'D'),
	 ('Iphone SE','Apple',2020,'E'),
	 ('Find X3','Oppo',2021,'F'),
	 ('Huawei P40','Huawei',2020,'G'),
	 ('Iphone 14','Apple',2023,'H'),
	 ('Google Pixel 6','Google',2022,'I'),
	 ('Galaxy Z Fold 5','Samsung',2023,'J');

INSERT INTO emmaus_db.evaluation (ram,storage,network,os,guarantee,charger_in,`condition`,price,is_sold,sale_date,agency_id,models_id) VALUES
	 (2,64,'4G','Android 10',0,0,'Parfait',300,0,NULL,1,1),
	 (4,32,'4G','Android 10',1,1,'Moyen',120,1,'2023-01-18',6,1),
	 (6,128,'4G','Android 11',0,1,'Bon',170,0,NULL,14,2),
	 (8,256,'5G','Android 11',0,1,'Bon',80,0,NULL,15,2),
	 (6,64,'5G','Android 11',1,1,'Moyen',600,1,'2022-06-20',2,3),
	 (4,512,'5G','Android 11',0,1,'Parfait',500,0,NULL,3,3),
	 (8,1024,'4G','iOS 14',1,1,'Moyen',200,0,NULL,6,4),
	(6,64,'3G','iOS 14',0,1,'Moyen',150,0,NULL,9,4),
	(4,256,'4G','iOS 16',1,0,'Moyen ',130,0,NULL,11,5),
	(8,16,'5G','iOS 16',0,0,'Parfait',140,0,NULL,8,5),
	(2,32,'4G','Android 11',0,1,'Parfait',180,0,NULL,3,6),
	(8,16,'5G','Android 11',0,1,'Bon',290,0,NULL,5,6),
	(6,32,'4G','Andoid 10',0,1,'Bon',90,1,'2023-03-15',7,7),
	(4,64,'5G','Android 10',0,0,'Moyen',890,0,NULL,9,7),
	(8,512,'4G','iOS 99',0,1,'Parfait',450,1,'2022-10-28',1,8),
	(6,256,'4G','iOS 99',1,1,'Bon',230,0,NULL,5,8),
	(2,128,'4G','Android 11',0,0,'Bon',100,0,NULL,12,9),
	(8,128,'4G','Android 11',0,0,'Parfait',200,0,NULL,10,9),
	(4,256,'4G','Android 10',1,1,'Parfait',330,0,NULL,9,10),
	(4,64,'5G','Android 10',1,1,'Bon',760,0,NULL,8,10),
	(6,128,'5G','iOS 16',NULL,1,'Moyen',367.5,0,NULL,1,8),
	(4,32,'5G','iOS 16',NULL,1,'Parfait',487.5,0,NULL,5,8),
	(6,512,'5G','iOS 15',NULL,1,'Bon',470.4,0,NULL,1,8);

INSERT INTO emmaus_db.users (email, password, firstname, lastname, role, agency_id) VALUES 
('emmahuce@emmaus.fr','$argon2id$v=19$m=65536,t=3,p=4$4uYB9jdz0wzhfzDKz+OIyw$j36db+NXkxHL2WffcWMbG4vfb4WSR24yL9viwGkl2zA','Emma','Huce',1,1);
