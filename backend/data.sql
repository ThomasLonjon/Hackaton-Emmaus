INSERT INTO emmaus_db.agency (name,location,lat,`long`,phone_number) VALUES
	 ('Emmaus Leognan Bourg','Leognan',44.729,-0.600536,12),
	 ('Wild Code Emmaus','Paris',48.8689,2.40597,15);


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
	 (2,64,'4G','Android 10',0,0,'Parfait',300.0,0,NULL,1,1),
	 (4,32,'4G','Android 10',1,1,'Moyen',120.0,1,'2023-01-18',1,1),
	 (6,128,'4G','Android 11',0,1,'Bon',170.0,0,NULL,2,2),
	 (8,256,'5G','Android 11',0,1,'Bon',80.0,0,NULL,1,2),
	 (6,64,'5G','Android 11',1,1,'Moyen',600.0,1,'2022-06-20',2,3),
	 (4,512,'5G','Android 11',0,1,'Parfait',500.0,0,NULL,1,3),
	 (8,1024,'4G','iOS 14',1,1,'Moyen',200.0,0,NULL,1,4),
	 (6,64,'3G','iOS 14',0,1,'Moyen',150.0,0,NULL,2,4),
	 (4,256,'4G','iOS 16',1,0,'Moyen ',130.0,0,NULL,1,5),
	 (8,16,'5G','iOS 16',0,0,'Parfait',140.0,0,NULL,2,5),
	 (2,32,'4G','Android 11',0,1,'Parfait',180.0,0,NULL,1,6),
	 (8,16,'5G','Android 11',0,1,'Bon',290.0,0,NULL,2,6),
	 (6,32,'4G','Andoid 10',0,1,'Bon',90.0,1,'2023-03-15',1,7),
	 (4,64,'5G','Android 10',0,0,'Moyen',890.0,0,NULL,2,7),
	 (8,512,'4G','iOS 99',0,1,'Parfait',450.0,1,'2022-10-28',1,8),
	 (6,256,'4G','iOS 99',1,1,'Bon',230.0,0,NULL,2,8),
	 (2,128,'4G','Android 11',0,0,'Bon',100.0,0,NULL,1,9),
	 (8,128,'4G','Android 11',0,0,'Parfait',200.0,0,NULL,2,9),
	 (4,256,'4G','Android 10',1,1,'Parfait',330.0,0,NULL,1,10),
	 (4,64,'5G','Android 10',1,1,'Bon',760.0,0,NULL,1,10);
