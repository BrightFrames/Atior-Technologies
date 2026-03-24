import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart' as launcher;

class InfoScreen extends StatelessWidget {
  const InfoScreen({Key? key}) : super(key: key);

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
            // Hero Section
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
                      Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Row(
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
                      ),
                    ],
                  ),
                ),
              ),
            ),

            // Main Content
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Mission Section
                  _buildSection(
                    icon: Icons.lightbulb_outline,
                    title: 'Our Mission',
                    content: 'At Urbanscrapster, our mission is to make scrap disposal easy and efficient while promoting recycling and sustainability. We aim to provide fair prices for scrap materials and contribute to a cleaner environment.',
                    color: Colors.orange,
                  ),

                  const SizedBox(height: 24),

                  // Vision Section
                  _buildSection(
                    icon: Icons.remove_red_eye_outlined,
                    title: 'Our Vision',
                    content: "We believe in the power of recycling to reduce waste and conserve resources. By choosing Urban Scrapster, you're not just selling scrap; you're actively participating in a sustainable future.",
                    color: Colors.blue,
                  ),

                  const SizedBox(height: 24),

                  // Community Section
                  _buildSection(
                    icon: Icons.people_outline,
                    title: 'Community Impact',
                    content: "We're committed to supporting our local communities. By partnering with local businesses and organizations, we aim to foster a culture of recycling and responsible waste management.",
                    color: Colors.green,
                  ),

                  const SizedBox(height: 32),

                  // Contact Section
                  Container(
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: Colors.grey.shade100,
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(
                        color: Colors.grey.shade300,
                        width: 1,
                      ),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Connect With Us',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 16),
                        // Instagram Button
                        _buildContactButton(
                          icon: Icons.camera_alt_outlined,
                          label: 'Follow us on Instagram',
                          onTap: () => _launchURL('https://www.instagram.com/urbanscrapster/'),
                          color: Colors.pink,
                        ),
                        const SizedBox(height: 12),
                        // Email Button
                        _buildContactButton(
                          icon: Icons.mail_outline,
                          label: 'contact@urbanscrapster.com',
                          onTap: () => _copyToClipboard(
                            context,
                            'contact@urbanscrapster.com',
                          ),
                          color: Colors.blue,
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(height: 24),
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

  Widget _buildContactButton({
    required IconData icon,
    required String label,
    required VoidCallback onTap,
    required Color color,
  }) {
    return Material(
      color: Colors.white,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.symmetric(
            horizontal: 16,
            vertical: 12,
          ),
          decoration: BoxDecoration(
            border: Border.all(color: color.withOpacity(0.3)),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            children: [
              Icon(icon, color: color),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  label,
                  style: TextStyle(
                    fontSize: 16,
                    color: color.withAlpha(200),
                  ),
                ),
              ),
              Icon(
                Icons.arrow_forward_ios,
                size: 16,
                color: color.withOpacity(0.5),
              ),
            ],
          ),
        ),
      ),
    );
  }
}