import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart' as launcher;
import 'package:urbanscrapster/components/RecyclableItem.dart';
import 'package:urbanscrapster/components/RecyclableItemCard.dart';

class RatesScreen extends StatefulWidget {
  @override
  _RatesScreenState createState() => _RatesScreenState();
}

class _RatesScreenState extends State<RatesScreen> {
  final List<RecyclableItem> _items = [
    // Normal Recyclables
    RecyclableItem(name: 'Office Paper (A3/A4)', price: 'Rs 14/Kg', imagePath: 'asserts/images/OfficePaper.png'),
    RecyclableItem(name: 'Newspaper', price: 'Rs 14/Kg', imagePath: 'asserts/images/Newspaper.png'),
    RecyclableItem(name: 'Copies/Books', price: 'Rs 10/Kg', imagePath: 'asserts/images/Copies.png'),
    RecyclableItem(name: 'Steel Utensils', price: 'Rs 37/Kg', imagePath: 'asserts/images/SteelUtensils.png'),
    RecyclableItem(name: 'Aluminium', price: 'Rs 105/Kg', imagePath: 'asserts/images/Aluminium.jpeg'),
    RecyclableItem(name: 'Cardboard', price: 'Rs 7/Kg', imagePath: 'asserts/images/Cardboard.png'),
    RecyclableItem(name: 'Plastic', price: 'Rs 8/Kg', imagePath: 'asserts/images/Plastic.png'),
    RecyclableItem(name: 'Brass', price: 'Rs 305/Kg', imagePath: 'asserts/images/Brass.jpeg'),
    RecyclableItem(name: 'Copper', price: 'Rs 425/Kg', imagePath: 'asserts/images/Copper.jpeg'),
    RecyclableItem(name: 'Iron', price: 'Rs 27/Kg', imagePath: 'asserts/images/Iron.png'),

    RecyclableItem(name: 'Window AC', price: 'Rs 4100/Piece', imagePath: 'asserts/images/WindowAC.png'),
    RecyclableItem(name: 'AC (Copper Coil)', price: 'Rs 3000/Piece', imagePath: 'asserts/images/AC1Ton.png'),
    RecyclableItem(name: 'Washing Machine', price: 'Rs 1300/Piece', imagePath: 'asserts/images/WashingMachine.png'),
    RecyclableItem(name: 'Geyser', price: 'Rs 20/Kg', imagePath: 'asserts/images/Geyser.png'),
    RecyclableItem(name: ' Fridge', price: 'Rs 800/Piece', imagePath: 'asserts/images/Fridge.png'),
    RecyclableItem(name: 'Iron Cooler', price: 'Rs 30/Kg', imagePath: 'asserts/images/cooler.png'),

    RecyclableItem(name: 'Printer/Scanner', price: 'Rs 20/Kg', imagePath: 'asserts/images/Printer.png'),
    RecyclableItem(name: 'Plastic E-Waste', price: 'Rs 15/Kg', imagePath: 'asserts/images/PlasticEWaste.png'),
    RecyclableItem(name: 'Metal E-Waste', price: 'Rs 30/Kg', imagePath: 'asserts/images/MetalWaste.png'),
    RecyclableItem(name: 'Microwave', price: 'Rs 200/Piece', imagePath: 'asserts/images/Microwave.png'),
    RecyclableItem(name: 'UPS', price: 'Rs 180/Piece', imagePath: 'asserts/images/UPS.png'),
    RecyclableItem(name: 'CRT TV', price: 'Rs 150/Piece', imagePath: 'asserts/images/CRTTV.png'),
    RecyclableItem(name: 'Ceiling Fan', price: 'Rs 40/Kg', imagePath: 'asserts/images/CeilingFan.png'),
    RecyclableItem(name: 'Inverter/Stabilizer', price: 'Rs 42/Kg', imagePath: 'asserts/images/Inverter.png'),
    RecyclableItem(name: 'Battery', price: 'Rs 72/Kg', imagePath: 'asserts/images/Battery.png'),
    RecyclableItem(name: 'Motors (Copper Wiring)', price: 'Rs 35/Kg', imagePath: 'asserts/images/Motors.png'),
  ];
  List<RecyclableItem> _filteredItems = [];
  String _searchQuery = '';

  @override
  void initState() {
    super.initState();
    _filteredItems = _items;
  }

  void _filterItems(String query) {
    setState(() {
      _searchQuery = query;
      _filteredItems = _items
          .where((item) =>
      item.name.toLowerCase().contains(query.toLowerCase()) ||
          item.price.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  Future<void> _launchURL(String url) async {
    final Uri uri = Uri.parse(url);
    if (await launcher.canLaunchUrl(uri)) {
      await launcher.launchUrl(uri);
    } else {
      throw 'Could not launch $url';
    }
  }

  Future<void> _copyToClipboard(BuildContext context, String text) async {
    await Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Copied to clipboard'),
        behavior: SnackBarBehavior.floating,
        duration: Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Section with Branding
            Container(
              width: double.infinity,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    Colors.green[700] ?? Colors.green,
                    Colors.green[900] ?? Colors.green,
                  ],
                ),
              ),
              child: SafeArea(
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    children: [
                      // Logo and Company Name
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(
                            Icons.recycling,
                            size: 40,
                            color: Colors.green[100],
                          ),
                          const SizedBox(width: 12),
                          const Text(
                            'Urban Scrapster',
                            style: TextStyle(
                              fontSize: 28,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 16),
                      // Search Bar
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: TextField(
                          onChanged: (query) => _filterItems(query),
                          decoration: InputDecoration(
                            labelText: 'Search recyclables',
                            labelStyle: TextStyle(color: Colors.green.shade600),
                            prefixIcon: Icon(Icons.search, color: Colors.green.shade600),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(30),
                              borderSide: BorderSide(color: Colors.green.shade200),
                            ),
                            filled: true,
                            fillColor: Colors.green.shade50,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),

            // Mission and Vision Sections
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildSection(
                    icon: Icons.lightbulb_outline,
                    title: '',
                    // make this Notes in different lines
                    content: "Note: \n"
                        "1. The prices may vary with fluctuation in the scrap market.\n"
                        "2.Prices may be different for bulk pickups. Email us at contact@urbanscrapster.com to get quote for bulk pickup.",
                    color: Colors.orange,
                  ),
                  const SizedBox(height: 24),

                  // _buildSection(
                  //   icon: Icons.remove_red_eye_outlined,
                  //   title: 'Our Vision',
                  //   content: "Urban Scrapster envisions a systematic change in India's waste management.",
                  //   color: Colors.blue,
                  // ),
                  // const SizedBox(height: 24),

                  // Recyclables List
                  Text(
                    'Available Recyclables',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.green.shade700,
                    ),
                  ),
                  ListView.builder(
                    shrinkWrap: true,
                    physics: NeverScrollableScrollPhysics(),
                    padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    itemCount: _filteredItems.length,
                    itemBuilder: (context, index) {
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 8.0),
                        child: RecyclableItemCard(item: _filteredItems[index]),
                      );
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSection({
    required IconData icon,
    required String title,
    required String content,
    required Color color,
  }) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, color: color, size: 28),
              const SizedBox(width: 12),
              Text(
                title,
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: color.withAlpha(200),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Text(
            content,
            style: const TextStyle(
              fontSize: 16,
              height: 1.5,
              color: Colors.black87,
            ),
          ),
        ],
      ),
    );
  }
}
