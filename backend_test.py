import requests
import sys
import json
from datetime import datetime, timedelta

class JingpingAPITester:
    def __init__(self, base_url="https://matcha-brunch.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.created_reservation_id = None

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if endpoint else self.api_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                    return True, response_data
                except:
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {error_data}")
                except:
                    print(f"   Error: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_create_reservation(self):
        """Test creating a reservation"""
        tomorrow = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
        
        reservation_data = {
            "name": "Test User",
            "phone": "+34 600 123 456",
            "date": tomorrow,
            "time": "14:00",
            "guests": "2",
            "notes": "Test reservation from automated testing"
        }
        
        success, response = self.run_test(
            "Create Reservation",
            "POST",
            "reservations",
            200,
            data=reservation_data
        )
        
        if success and 'id' in response:
            self.created_reservation_id = response['id']
            print(f"   Created reservation ID: {self.created_reservation_id}")
        
        return success, response

    def test_get_reservations(self):
        """Test getting all reservations"""
        return self.run_test("Get All Reservations", "GET", "reservations", 200)

    def test_get_specific_reservation(self):
        """Test getting a specific reservation"""
        if not self.created_reservation_id:
            print("❌ Skipped - No reservation ID available")
            return False, {}
        
        return self.run_test(
            "Get Specific Reservation",
            "GET",
            f"reservations/{self.created_reservation_id}",
            200
        )

    def test_update_reservation_status(self):
        """Test updating reservation status"""
        if not self.created_reservation_id:
            print("❌ Skipped - No reservation ID available")
            return False, {}
        
        return self.run_test(
            "Update Reservation Status",
            "PATCH",
            f"reservations/{self.created_reservation_id}/status?status=confirmed",
            200
        )

    def test_delete_reservation(self):
        """Test deleting a reservation"""
        if not self.created_reservation_id:
            print("❌ Skipped - No reservation ID available")
            return False, {}
        
        return self.run_test(
            "Delete Reservation",
            "DELETE",
            f"reservations/{self.created_reservation_id}",
            200
        )

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Jingping e Hijo API Tests")
        print("=" * 50)
        
        # Test API availability
        self.test_api_root()
        
        # Test reservation CRUD operations
        self.test_create_reservation()
        self.test_get_reservations()
        self.test_get_specific_reservation()
        self.test_update_reservation_status()
        
        # Clean up - delete test reservation
        self.test_delete_reservation()
        
        # Print results
        print("\n" + "=" * 50)
        print(f"📊 Tests completed: {self.tests_passed}/{self.tests_run} passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print("⚠️  Some tests failed")
            return False

def main():
    tester = JingpingAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())