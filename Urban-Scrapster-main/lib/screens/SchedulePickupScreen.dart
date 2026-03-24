import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class SchedulePickupScreen extends StatefulWidget {
  const SchedulePickupScreen({Key? key}) : super(key: key);

  @override
  State<SchedulePickupScreen> createState() => _SchedulePickupScreenState();
}

class _SchedulePickupScreenState extends State<SchedulePickupScreen> {
  final _formKey = GlobalKey<FormState>();
  DateTime? selectedDate;
  String? selectedTimeSlot;

  final _nameController = TextEditingController();
  final _phoneController = TextEditingController();
  final _addressController = TextEditingController();
  String? selectedPincode;
  String? selectedWeightRange;

  Future<void> _saveToFirestore() async {
    try {
      final collection = FirebaseFirestore.instance.collection('schedule');
      await collection.add({
        'name': _nameController.text,
        'phone': _phoneController.text,
        'weight': selectedWeightRange,
        'address': _addressController.text,
        'pincode': selectedPincode,
        'date': selectedDate?.toIso8601String(),
        'time': selectedTimeSlot,
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: const Text('Pickup scheduled successfully!'),
          backgroundColor: Colors.green.shade600,
          behavior: SnackBarBehavior.floating,
        ),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Failed to save data: $e'),
          backgroundColor: Colors.red.shade600,
          behavior: SnackBarBehavior.floating,
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[50],
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.transparent,
        title: const Text(
          'Schedule Pickup',
          style: TextStyle(
            color: Colors.green,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildSectionHeader('Personal Information', Icons.person_outline),
                  const SizedBox(height: 16),
                  _buildTextField(
                    controller: _nameController,
                    label: 'Full Name',
                    icon: Icons.person_outline,
                    validator: _validateRequired,
                  ),
                  const SizedBox(height: 16),
                  _buildTextField(
                    controller: _phoneController,
                    label: 'Mobile Number',
                    icon: Icons.phone_outlined,
                    keyboardType: TextInputType.phone,
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter your mobile number';
                      }
                      if (value.length != 10 || !RegExp(r'^[0-9]+$').hasMatch(value)) {
                        return 'Please enter a valid 10-digit mobile number';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 24),
                  _buildSectionHeader('Pickup Details', Icons.local_shipping_outlined),
                  const SizedBox(height: 16),
                  _buildDropdown(
                    label: 'Estimated Weight',
                    value: selectedWeightRange,
                    items: [
                      '5kg-10kg',
                      '10kg-20kg',
                      '20kg-40kg',
                      '40kg-60kg',
                      '60kg-80kg',
                      '80kg-100kg',
                      '100kg-200kg'
                    ],
                    icon: Icons.scale_outlined,
                    onChanged: (value) => setState(() => selectedWeightRange = value),
                    validator: (value) => value == null ? 'Please select a weight range' : null,
                  ),
                  const SizedBox(height: 16),
                  _buildTextField(
                    controller: _addressController,
                    label: 'Pickup Address',
                    icon: Icons.location_on_outlined,
                    maxLines: 3,
                    validator: _validateRequired,
                  ),
                  const SizedBox(height: 16),
                  _buildDropdown(
                    label: 'Pincode',
                    value: selectedPincode,
                    items: ['249404', '248001'],
                    icon: Icons.pin_drop_outlined,
                    onChanged: (value) => setState(() => selectedPincode = value),
                    validator: (value) => value == null ? 'Please select a valid pincode' : null,
                  ),
                  const SizedBox(height: 24),
                  _buildSectionHeader('Schedule Time', Icons.schedule),
                  const SizedBox(height: 16),
                  // Date Selection Row
                  Container(
                    margin: const EdgeInsets.only(bottom: 16),
                    child: _buildDateTimeButton(
                      onPressed: () => _selectDate(context),
                      icon: Icons.calendar_today_outlined,
                      label: 'Select Date',
                      value: selectedDate != null ? _formatDate(selectedDate!) : 'Choose date',
                    ),
                  ),
                  // Time Slot Selection Row
                  _buildDropdown(
                    label: 'Select Time Slot',
                    value: selectedTimeSlot,
                    items: [
                      '10:00AM-12:00PM',
                      '12:00PM-2:00PM',
                      '2:00PM-4:00PM',
                      '4:00PM-6:00PM'
                    ],
                    icon: Icons.access_time_outlined,
                    onChanged: (value) => setState(() => selectedTimeSlot = value),
                    validator: (value) => value == null ? 'Please select a time slot' : null,
                  ),
                  const SizedBox(height: 32),
                  _buildSubmitButton(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildSectionHeader(String title, IconData icon) {
    return Row(
      children: [
        Icon(icon, size: 24, color: Colors.green.shade700),
        const SizedBox(width: 8),
        Text(
          title,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: Colors.green.shade700,
          ),
        ),
      ],
    );
  }

  Widget _buildTextField({
    required TextEditingController controller,
    required String label,
    required IconData icon,
    TextInputType? keyboardType,
    int maxLines = 1,
    String? Function(String?)? validator,
  }) {
    return SizedBox(
      height: maxLines == 1 ? 60 : 100,
      child: TextFormField(
        controller: controller,
        keyboardType: keyboardType,
        maxLines: maxLines,
        decoration: InputDecoration(
          labelText: label,
          prefixIcon: Icon(icon, color: Colors.green.shade600),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(12),
            borderSide: BorderSide(color: Colors.grey.shade300),
          ),
        ),
        validator: validator,
      ),
    );
  }

  Widget _buildDropdown({
    required String label,
    required String? value,
    required List<String> items,
    required IconData icon,
    required ValueChanged<String?> onChanged,
    String? Function(String?)? validator,
  }) {
    return SizedBox(
      height: 60,
      child: DropdownButtonFormField<String>(
        value: value,
        onChanged: onChanged,
        items: items
            .map((item) => DropdownMenuItem(
          value: item,
          child: Text(item),
        ))
            .toList(),
        decoration: InputDecoration(
          labelText: label,
          prefixIcon: Icon(icon, color: Colors.green.shade600),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(12),
            borderSide: BorderSide(color: Colors.grey.shade300),
          ),
        ),
        validator: validator,
      ),
    );
  }

  Widget _buildDateTimeButton({
    required VoidCallback onPressed,
    required IconData icon,
    required String label,
    required String value,
  }) {
    return SizedBox(
      height: 60,
      child: ElevatedButton(
        onPressed: onPressed,
        style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          backgroundColor: Colors.grey.shade100,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
            side: BorderSide(color: Colors.grey.shade300),
          ),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                Icon(icon, color: Colors.green.shade600),
                const SizedBox(width: 8),
                Text(
                  label,
                  style: TextStyle(color: Colors.grey.shade600),
                ),
              ],
            ),
            Text(
              value,
              style: const TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSubmitButton() {
    return Container(
      width: double.infinity,
      height: 54,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        gradient: LinearGradient(
          colors: [
            Colors.green.shade600,
            Colors.green.shade800,
          ],
        ),
      ),
      child: ElevatedButton(
        onPressed: () {
          if (_formKey.currentState!.validate() &&
              selectedDate != null &&
              selectedTimeSlot != null) {
            _saveToFirestore();
          } else if (selectedDate == null || selectedTimeSlot == null) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Text('Please select both date and time slot'),
                behavior: SnackBarBehavior.floating,
              ),
            );
          }
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.transparent,
          shadowColor: Colors.transparent,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
        child: const Text(
          'SCHEDULE PICKUP',
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
      ),
    );
  }

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime.now(),
      lastDate: DateTime(2101),
    );
    if (picked != null && picked != selectedDate) {
      setState(() {
        selectedDate = picked;
      });
    }
  }

  String? _validateRequired(String? value) {
    if (value == null || value.isEmpty) {
      return 'This field is required';
    }
    return null;
  }

  String _formatDate(DateTime date) {
    return '${date.day}/${date.month}/${date.year}';
  }
}