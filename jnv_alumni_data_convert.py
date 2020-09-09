import csv, json

csvFilePath = 'Copy of Contact Information (Responses) - Form Responses 1.csv'
csvFilePathOutput = 'Alumni Data NVS RO Pune With PassoutYear- From Google Form responses.csv'

with open(csvFilePathOutput, 'w') as csvOutput:
	with open(csvFilePath) as csvFile:
		csvReader = csv.DictReader(csvFile)
		fieldnames = ['Sr. No', 
				'JNV', 
				'Year of Admission',
				'Class of Admission',
				'Admission No.', 
				'Name of the Student',
				'Highest Class Completed in JNV',
				'Passout Year',
				'Present Qualification',
				'Present Profession',
				'State/Central/Private',
				'Mobile No',
				'Email ID',
				'Present Complete Address',
				'Any Other Information']
		#
		writer = csv.DictWriter(csvOutput, fieldnames=fieldnames)
		writer.writeheader()
		srno = 1
		for rows in csvReader:
			if rows['Duplicate?'] == 'Duplicate':
				continue
			#profession student
			state_central_private = ''
			if rows['Occupation / work / Job with city of work'] == 'Student':
				state_central_private = 'Student'
			else:
				state_central_private = rows['Are you doing government service / or working in private sector']


			#state / central /private
			state_central_private = rows['Are you doing government service / or working in private sector']
			writer.writerow({'Sr. No': srno, 
				'JNV': 'KATHLAL', 
				'Year of Admission': rows['Admission Year'],
				'Class of Admission': rows['Admission Class'],
				'Admission No.': '', 
				'Name of the Student': rows['Name'],
				'Highest Class Completed in JNV': rows['Passout Class'],
				'Passout Year': rows['Passout Year'],
				'Present Qualification': rows['Study/ Qualification '],
				'Present Profession': rows['Occupation / work / Job with city of work'],
				'State/Central/Private': state_central_private,
				'Mobile No': rows['Contact Number '],
				'Email ID': rows['Email Address'],
				'Present Complete Address': rows['Address'],
				'Any Other Information': rows['Any other information']})
			srno += 1
			#, 'KATHLAL', '', rows['Full Name'

#create new json file and write data on it
#with open(jsonFilePath, 'w') as jsonFile:
	#make it more readable and pretty
#	jsonFile.write(json.dumps(data, indent=4))
