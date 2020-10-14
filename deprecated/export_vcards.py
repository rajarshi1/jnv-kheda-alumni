import csv, json

csvFilePath = 'Form Responses 1.csv'
csvFilePathOutput = 'ForVCards.csv'

with open(csvFilePathOutput, 'w') as csvOutput:
	with open(csvFilePath) as csvFile:
		csvReader = csv.DictReader(csvFile)
		fieldnames = ['last_name', 
				'first_name',
				'org',
				'title',
				'phone',
				'email',
				'website',
				'street',
				'city',
				'p_code',
				'country']
		#
		writer = csv.DictWriter(csvOutput, fieldnames=fieldnames)
		writer.writeheader()
		for rows in csvReader:
			if rows['Duplicate?'] == 'Duplicate':
				continue
			state_central_private = rows['Are you doing government service / or working in private sector']
			#{'first_name': rows['Name'] + " AAN Kheda", #
			writer.writerow({'first_name': "JNVK " + rows['Name'] + " " + rows['Admission Year'] + "(" + rows['Admission Class'] + ") - " + rows['Passout Year'] + "(" +rows['Passout Class'] + ")",
				'phone': rows['WhatsAppNumber'],
				'email': rows['Email Address']})
