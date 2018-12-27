const express = require('express')
const app = express()
//const port = 5060
var port = process.env.PORT || 5060;
const bodyParser = require('body-parser');
//var test = require('tape')
var pdf = require('./')
var path = require('path')
var fs = require('fs')
var ejs = require('ejs');
var moment = require('moment');


app.use(express.static(__dirname + '/'));
app.set('views', __dirname + 'views');
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});


app.get('/', function(req, res) {

	res.send('Hi Lease PDF!')

});

app.get('/test', function(req, res) {

	res.send('Hi Lease PDF !!!!!!')

});


app.post('/PdfDetails', function(req, res) {


		var LandlordName =req.body.LandlordName ;

		var tenantFname = req.body.tenantFname  ;
		var tenantLname = req.body.tenantLname;
		var RentalUnitName = req.body.RentalUnitName;
		var StreetName = req.body.StreetName;
		var StreetNumber = req.body.StreetNumber;
		var CityTownName = req.body.CityTownName;
		var Province = req.body.Province;
		var PostalCode = req.body.PostalCode;
		var NoOfVehiclesParkingSpace = req.body.NoOfVehiclesParkingSpace;
		var Rentalunitinacondominium = req.body.Rentalunitinacondominium;
		var ContactStreetName = req.body.ContactStreetName;
		var ContactStreetNumber = req.body.ContactStreetNumber;
		var ContactCityTownName = req.body.ContactCityTownName;
		var ContactProvince = req.body.ContactProvince;
		var ContactPostalCode = req.body.ContactPostalCode;
		var ContactPoBox = req.body.ContactPoBox;
		var condominium = req.body.condominium;
		var Boththelandlordandtenant = req.body.Boththelandlordandtenant;
		var landlordisprovidingphone = req.body.landlordisprovidingphone;
		var tenancystartson = req.body.tenancystartson;
		var tenancyendingon = req.body.tenancyendingon;
		var Gas = req.body.Gas;
		var Airconditioning = req.body.Airconditioning;
		var Additionalstoragespace = req.body.Additionalstoragespace;
		var OnSiteLaundry = req.body.OnSiteLaundry;
		var GuestParking = req.body.GuestParking;
		var other = req.body.other;
		var utilitiesresponsibility = req.body.utilitiesresponsibility;
		var Heat = req.body.Heat;
		var Water = req.body.Water;
		var RentDiscounts = req.body.RentDiscounts;


		var tenancystartson = moment(req.body.tenancystartson).format('YYYY/MM/DD');
		var tenancyendingon = moment(req.body.tenancyendingon).format('YYYY/MM/DD');
		var Amonthlytenancy = req.body.Amonthlytenancy;
		var Othertenanc = req.body.Othertenanc;


		var Rent_is_to_paid = req.body.Rent_is_to_paid;
		var Baserent = req.body.Baserent;
		var ParkingIfApplicatble = req.body.ParkingIfApplicatble;
		var Otherservices_and_utilities = req.body.Otherservices_and_utilities;
		var TotalRent = req.body.TotalRent;
		var Rentispayableto = req.body.Rentispayableto;
		var landlordSAdministration = req.body.landlordSAdministration;
		var partialrentofprice = req.body.partialrentofprice;
		var TheTenantWillPayPartialRentof = moment(req.body.TheTenantWillPayPartialRentof).format('YYYY/MM/DD');
		var ThisPartialRentCoversFrom = moment(req.body.ThisPartialRentCoversFrom).format('YYYY/MM/DD');
		var ThisPartialRentCoversto = moment(req.body.ThisPartialRentCoversto).format('YYYY/MM/DD');

		var Gas = req.body.Gas;
		var Airconditioning = req.body.Airconditioning;
		var Additionalstoragespace = req.body.Additionalstoragespace;
		var OnSiteLaundry = req.body.OnSiteLaundry;
		var GuestParking = req.body.GuestParking;
		var other = req.body.other;
		var utilitiesresponsibility = req.body.utilitiesresponsibility;
		var Heat = req.body.Heat;
		var Water = req.body.Water;
		var RentDiscounts = req.body.RentDiscounts;
		var KeyDeposit = req.body.KeyDeposit;
		var RentDeposit = req.body.RentDeposit;
		var Smoking = req.body.Smoking;
		var TenantInsurance = req.body.TenantInsurance;
		var AdditionalTerms = req.body.AdditionalTerms;


		var LandlordNameSigningAgreement = req.body.LandlordNameSigningAgreement;
		var LandlordSignature = req.body.LandlordSignature;
		var LandlordAgreementDate = moment(req.body.LandlordAgreementDate).format('YYYY/MM/DD');
		var TenantAgreementName = req.body.TenantAgreementName;
		var TenantAgreementSignature = req.body.TenantAgreementSignature;
		var TenantAgreementDate = moment(req.body.TenantAgreementDate).format('YYYY/MM/DD');





		var compiled = ejs.compile(fs.readFileSync(__dirname + '/template.html', 'utf8'));
	

		
		  var html = compiled({ 
			LandlordName: LandlordName,
			tenantFname: tenantFname,
			tenantLname: tenantLname,
			RentalUnitName: RentalUnitName,
			StreetName: StreetName,
			StreetNumber:StreetNumber,
			CityTownName:CityTownName,
			Province:Province,
			PostalCode:PostalCode,
			NoOfVehiclesParkingSpace:NoOfVehiclesParkingSpace,
			condominium:condominium,
			ContactStreetName:ContactStreetName,
			ContactProvince:ContactProvince,
			ContactPoBox:ContactPoBox,
			ContactPostalCode:ContactPoBox,
			ContactCityTownName:ContactCityTownName,
			ContactCityTownName:ContactCityTownName,
			ContactStreetNumber:ContactStreetNumber,
			Boththelandlordandtenant:Boththelandlordandtenant,
			landlordisprovidingphone:landlordisprovidingphone,

			tenancystartson:tenancystartson,
			tenancyendingon:tenancyendingon,
			Amonthlytenancy:Amonthlytenancy,
			Othertenanc:Othertenanc,


			Rent_is_to_paid:Rent_is_to_paid,
			Baserent:Baserent,
			ParkingIfApplicatble:ParkingIfApplicatble,
			Otherservices_and_utilities:Otherservices_and_utilities,
			TotalRent:TotalRent,
			Rentispayableto:Rentispayableto,
			partialrentofprice:partialrentofprice,
			TheTenantWillPayPartialRentof:TheTenantWillPayPartialRentof,
			ThisPartialRentCoversFrom:ThisPartialRentCoversFrom,
			ThisPartialRentCoversto:ThisPartialRentCoversto,
			landlordSAdministration:landlordSAdministration,

			Gas:Gas,
			Airconditioning:Airconditioning,
			Additionalstoragespace:Additionalstoragespace,
			OnSiteLaundry:OnSiteLaundry,
			GuestParking:GuestParking,
			other:other,
			utilitiesresponsibility:utilitiesresponsibility,
			Heat:Heat,
			Water:Water,
			RentDiscounts:RentDiscounts,
			KeyDeposit:KeyDeposit,
			RentDeposit:RentDeposit,
			Smoking:Smoking,
			TenantInsurance:TenantInsurance,
			AdditionalTerms:AdditionalTerms,

			LandlordNameSigningAgreement:LandlordNameSigningAgreement,
			LandlordSignature:LandlordSignature,
			LandlordAgreementDate:LandlordAgreementDate,
			TenantAgreementName:TenantAgreementName,
			TenantAgreementSignature:TenantAgreementSignature,
			TenantAgreementDate:TenantAgreementDate,
		});



		var path = "file:///"+__dirname+"/";
		var path2 = path.replace(/\\/g, "/");


		var options = {
		    // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
		 
		  // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
		  height: "212mm",        // allowed units: mm, cm, in, px
		  width: "230mm",
		  base: path2
		}

			pdf.create(html,options).toFile('./result.pdf',() => {
			    console.log('pdf done')
			    res.send({ status: '0k' ,link:'https://leasepdfapi.herokuapp.com/result.pdf'});
			})



	

});

app.listen(port, () => console.log(`app listening on port ${port}!`))
