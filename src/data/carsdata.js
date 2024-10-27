const carsdata=[
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Toyota Camry",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "28 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 400,
    "image_url": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveW90YSUyMGNhbWVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Honda Civic",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "32 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 350,
    "image_url": "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Ford Explorer",
    "car_model_year": 2021,
    "seating_capacity": 7,
    "fuel_type": "Gasoline",
    "mileage": "24 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Tesla Model 3",
    "car_model_year": 2022,
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "mileage": "130 MPGe",
    "transmission_type": "Automatic",
    "rent_per_month": 900,
    "image_url": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Chevrolet Malibu",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 300,
    "image_url": "https://images.unsplash.com/photo-1663954390964-79ebb3d27223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hldnJvbGV0JTIwbWFsaWJ1fGVufDB8fDB8fHww"
  },
  {
    "car_name": "BMW X5",
    "car_model_year": 2020,
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "mileage": "26 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Audi A4",
    "car_model_year": 2021,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "29 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 600,
    "image_url": "https://images.unsplash.com/photo-1726003536800-b9ec0888cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGklMjBhNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Hyundai Sonata",
    "car_model_year": 2019,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "31 MPG",
    "transmission_type": "Automatic",
    "rent_per_month": 320,
    "image_url": "https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh5dW5kYWklMjBzdW5hdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    "car_name": "Kia Soul",
    "car_model_year": 2018,
    "seating_capacity": 5,
    "fuel_type": "Gasoline",
    "mileage": "30 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 290,
    "image_url": "https://images.unsplash.com/photo-1592805723127-004b174a1798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwc291bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "car_name": "Jeep Wrangler",
    "car_model_year": 2022,
    "seating_capacity": 4,
    "fuel_type": "Gasoline",
    "mileage": "22 MPG",
    "transmission_type": "Manual",
    "rent_per_month": 750,
    "image_url": "https://images.unsplash.com/photo-1641784001736-78e8fa1d6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHx8MA%3D%3D"
  }
]
export default carsdata;